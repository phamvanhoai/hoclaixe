import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import EmptyState from '../components/common/EmptyState';
import PrimaryButton from '../components/common/PrimaryButton';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import { getCategoryById } from '../utils/quiz';

export default function MistakesScreen({ navigation }) {
  const { mistakeQuestions, bookmarkedQuestions } = useAppContext();

  return (
    <ScreenContainer>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerButton}>
          <MaterialCommunityIcons name="arrow-left" size={22} color={colors.text} />
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.headerTitle}>Ôn lại câu sai</Text>
          <Text style={styles.headerSubtitle}>Tập trung vào các câu đã trả lời sai và những câu bạn đã đánh dấu</Text>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>{mistakeQuestions.length}</Text>
          <Text style={styles.summaryLabel}>Câu sai hiện tại</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>{bookmarkedQuestions.length}</Text>
          <Text style={styles.summaryLabel}>Câu đánh dấu</Text>
        </View>
      </View>

      {mistakeQuestions.length === 0 ? (
        <EmptyState
          icon="party-popper"
          title="Bạn chưa có câu sai nào"
          description="Làm thêm bài học và đề thi thử. Mỗi câu sai sẽ tự động được thêm vào danh sách này."
        />
      ) : (
        <>
          <PrimaryButton
            label="Bắt đầu ôn toàn bộ câu sai"
            icon="play"
            onPress={() =>
              navigation.navigate('QuestionSession', {
                mode: 'review',
                questionIds: mistakeQuestions.map((item) => item.id),
                title: 'Ôn lại câu sai',
                sessionSeed: Date.now(),
              })
            }
          />
          {mistakeQuestions.map((item, index) => {
            const category = getCategoryById(item.categoryId);

            return (
              <Pressable
                key={item.id}
                style={styles.questionCard}
                onPress={() =>
                  navigation.navigate('QuestionSession', {
                    mode: 'review',
                    questionIds: [item.id],
                    title: `Câu sai #${index + 1}`,
                    sessionSeed: Date.now(),
                  })
                }
              >
                <Text style={styles.questionTitle}>{item.question}</Text>
                <Text style={styles.questionMeta}>{category?.title ?? 'Chủ đề'} • Chạm để học lại nhanh</Text>
              </Pressable>
            );
          })}
        </>
      )}
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
    gap: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: 4,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text,
  },
  summaryLabel: {
    fontSize: 13,
    color: colors.textMuted,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  questionTitle: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.text,
  },
  questionMeta: {
    fontSize: 13,
    color: colors.textMuted,
  },
});