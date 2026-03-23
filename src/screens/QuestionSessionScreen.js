import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import EmptyState from '../components/common/EmptyState';
import PrimaryButton from '../components/common/PrimaryButton';
import ProgressMeter from '../components/common/ProgressMeter';
import QuestionOption from '../components/quiz/QuestionOption';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import {
  buildQuestionSession,
  calculateSessionResult,
  getCategoryById,
  getSignById,
  shuffleArray,
} from '../utils/quiz';

function buildMockTestQuestions(questions, limit) {
  const target = Math.min(limit, questions.length);
  const chosen = [];
  const chosenIds = new Set();
  const criticalQuestion = shuffleArray(questions.filter((item) => item.isCritical))[0];

  if (criticalQuestion) {
    chosen.push(criticalQuestion);
    chosenIds.add(criticalQuestion.id);
  }

  ['rules', 'signs', 'situations', 'ethics', 'technique'].forEach((categoryId) => {
    if (chosen.length >= target) {
      return;
    }

    const candidate = shuffleArray(
      questions.filter((item) => item.categoryId === categoryId && !chosenIds.has(item.id)),
    )[0];

    if (candidate) {
      chosen.push(candidate);
      chosenIds.add(candidate.id);
    }
  });

  shuffleArray(questions.filter((item) => !chosenIds.has(item.id))).forEach((item) => {
    if (chosen.length < target) {
      chosen.push(item);
      chosenIds.add(item.id);
    }
  });

  return shuffleArray(chosen);
}

export default function QuestionSessionScreen({ navigation, route }) {
  const {
    questions,
    selectedLicense,
    recordAnswer,
    toggleBookmark,
    saveMockTest,
    state,
  } = useAppContext();

  const mode = route.params?.mode ?? 'practice';
  const categoryId = route.params?.categoryId ?? null;
  const questionIds = route.params?.questionIds ?? null;
  const title = route.params?.title ?? 'Học câu hỏi';
  const sessionSeed = route.params?.sessionSeed;

  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let nextQuestions = buildQuestionSession({
      questions,
      mode,
      categoryId,
      questionIds,
      limit: selectedLicense.examQuestionCount,
    });

    if (mode === 'mockTest') {
      nextQuestions = buildMockTestQuestions(nextQuestions, selectedLicense.examQuestionCount);
    }

    setSessionQuestions(nextQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setRevealed(false);
  }, [questions, mode, categoryId, questionIds?.join('|'), selectedLicense.examQuestionCount, sessionSeed]);

  useEffect(() => {
    const currentQuestion = sessionQuestions[currentIndex];
    if (!currentQuestion) {
      return;
    }

    const existingAnswer = answers[currentQuestion.id];
    setSelectedOptionId(existingAnswer?.selectedOptionId ?? null);
    setRevealed(Boolean(existingAnswer));
  }, [currentIndex, sessionQuestions, answers]);

  const currentQuestion = sessionQuestions[currentIndex];

  if (!currentQuestion) {
    return (
      <ScreenContainer>
        <EmptyState
          icon="book-off-outline"
          title="Không có câu hỏi cho lựa chọn này"
          description="Hãy đổi hạng bằng, đổi chủ đề hoặc làm thêm để tạo dữ liệu học."
        />
        <PrimaryButton label="Quay lại" variant="secondary" onPress={() => navigation.goBack()} />
      </ScreenContainer>
    );
  }

  const category = getCategoryById(currentQuestion.categoryId);
  const sign = currentQuestion.signId ? getSignById(currentQuestion.signId) : null;
  const targetScore = mode === 'mockTest'
    ? Math.max(1, Math.round((sessionQuestions.length * selectedLicense.targetScore) / selectedLicense.examQuestionCount))
    : sessionQuestions.length;
  const progress = Math.round(((currentIndex + 1) / sessionQuestions.length) * 100);
  const isBookmarked = state.bookmarkedQuestionIds.includes(currentQuestion.id);

  function getOptionState(optionId) {
    if (!revealed) {
      return selectedOptionId === optionId ? 'selected' : 'default';
    }

    if (optionId === currentQuestion.correctOptionId) {
      return 'correct';
    }

    if (selectedOptionId === optionId && optionId !== currentQuestion.correctOptionId) {
      return 'wrong';
    }

    return 'default';
  }

  function handleCheckAnswer() {
    if (!selectedOptionId) {
      Alert.alert('Chưa chọn đáp án', 'Bạn hãy chọn một phương án trước khi kiểm tra.');
      return;
    }

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: {
        selectedOptionId,
        isCorrect,
      },
    };

    setAnswers(nextAnswers);
    recordAnswer({
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
      mode,
    });
    setRevealed(true);
  }

  function handleNext() {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((value) => value + 1);
      return;
    }

    const criticalMistakes = sessionQuestions.filter(
      (question) => question.isCritical && answers[question.id] && !answers[question.id].isCorrect,
    ).length;
    const baseResult = calculateSessionResult({
      questions: sessionQuestions,
      answers,
      targetScore,
    });
    const result = {
      ...baseResult,
      id: `${Date.now()}`,
      title,
      mode,
      targetScore,
      takenAt: new Date().toISOString(),
      licenseCode: selectedLicense.code,
      criticalMistakes,
      isPassed: mode === 'mockTest' ? baseResult.isPassed && criticalMistakes === 0 : baseResult.isPassed,
    };

    if (mode === 'mockTest') {
      saveMockTest(result);
    }

    navigation.replace('Result', {
      result,
      restartConfig: {
        mode,
        categoryId,
        questionIds,
        title,
      },
    });
  }

  return (
    <ScreenContainer>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerButton}>
          <MaterialCommunityIcons name="arrow-left" size={22} color={colors.text} />
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>Câu {currentIndex + 1}/{sessionQuestions.length}</Text>
        </View>
        <Pressable onPress={() => toggleBookmark(currentQuestion.id)} style={styles.headerButton}>
          <MaterialCommunityIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={22}
            color={isBookmarked ? colors.primary : colors.text}
          />
        </Pressable>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>{mode === 'mockTest' ? 'Đề thi thử' : 'Phiên học'}</Text>
          <Text style={styles.progressValue}>{progress}%</Text>
        </View>
        <ProgressMeter value={progress} />
        {mode === 'mockTest' ? (
          <Text style={styles.progressHint}>Mục tiêu mô phỏng: {targetScore}/{sessionQuestions.length} và không sai câu liệt.</Text>
        ) : null}
      </View>

      <View style={styles.questionCard}>
        <View style={styles.badgeRow}>
          <View style={[styles.badge, { backgroundColor: `${category?.accent ?? colors.primary}18` }]}>
            <Text style={[styles.badgeText, { color: category?.accent ?? colors.primary }]}>{category?.title ?? 'Câu hỏi'}</Text>
          </View>
          {currentQuestion.isCritical ? (
            <View style={[styles.badge, { backgroundColor: '#fee2e2' }]}>
              <Text style={[styles.badgeText, { color: colors.danger }]}>Câu liệt</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {sign ? (
          <View style={styles.signCard}>
            <Text style={[styles.signCode, { color: sign.accent }]}>{sign.code}</Text>
            <Text style={styles.signName}>{sign.name}</Text>
            <Text style={styles.signMeaning}>{sign.meaning}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.optionsWrap}>
        {currentQuestion.options.map((option) => (
          <QuestionOption
            key={option.id}
            option={option}
            state={getOptionState(option.id)}
            onPress={() => !revealed && setSelectedOptionId(option.id)}
          />
        ))}
      </View>

      {revealed ? (
        <View style={styles.explanationCard}>
          <Text style={styles.explanationTitle}>
            {answers[currentQuestion.id]?.isCorrect ? 'Chính xác' : 'Cần ghi nhớ'}
          </Text>
          <Text style={styles.explanationBody}>{currentQuestion.explanation}</Text>
        </View>
      ) : null}

      <View style={styles.actionRow}>
        {!revealed ? (
          <PrimaryButton label="Kiểm tra đáp án" icon="check-circle-outline" onPress={handleCheckAnswer} />
        ) : (
          <PrimaryButton
            label={currentIndex === sessionQuestions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
            icon={currentIndex === sessionQuestions.length - 1 ? 'flag-checkered' : 'arrow-right'}
            onPress={handleNext}
          />
        )}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCopy: {
    flex: 1,
    gap: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
  },
  progressCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    textTransform: 'uppercase',
  },
  progressValue: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary,
  },
  progressHint: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
    gap: spacing.md,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  questionText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '900',
    color: colors.text,
  },
  signCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.md,
    padding: spacing.lg,
    gap: 4,
  },
  signCode: {
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  signName: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  signMeaning: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
  optionsWrap: {
    gap: spacing.md,
  },
  explanationCard: {
    backgroundColor: '#eff6ff',
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    padding: spacing.lg,
    gap: spacing.xs,
  },
  explanationTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.primary,
  },
  explanationBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  actionRow: {
    marginTop: spacing.sm,
  },
});