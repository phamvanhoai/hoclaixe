import { Pressable, StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import PrimaryButton from '../components/common/PrimaryButton';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import { getCategoryById } from '../utils/quiz';

export default function MistakesScreen({ navigation }) {
  const { mistakeQuestions, bookmarkedQuestions } = useAppContext();

  return (
    <ScreenContainer>
      <SectionTitle title="On lai cau sai" subtitle="Tap trung vao cac cau da tra loi sai va nhung cau ban da danh dau" />

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>{mistakeQuestions.length}</Text>
          <Text style={styles.summaryLabel}>Cau sai hien tai</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>{bookmarkedQuestions.length}</Text>
          <Text style={styles.summaryLabel}>Cau danh dau</Text>
        </View>
      </View>

      {mistakeQuestions.length === 0 ? (
        <EmptyState
          icon="party-popper"
          title="Ban chua co cau sai nao"
          description="Lam them bai hoc va de thi thu. Moi cau sai se tu dong duoc them vao danh sach nay."
        />
      ) : (
        <>
          <PrimaryButton
            label="Bat dau on toan bo cau sai"
            icon="play"
            onPress={() =>
              navigation.navigate('QuestionSession', {
                mode: 'review',
                questionIds: mistakeQuestions.map((item) => item.id),
                title: 'On lai cau sai',
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
                    title: `Cau sai #${index + 1}`,
                    sessionSeed: Date.now(),
                  })
                }
              >
                <Text style={styles.questionTitle}>{item.question}</Text>
                <Text style={styles.questionMeta}>{category?.title ?? 'Chu de'} • Cham de hoc lai nhanh</Text>
              </Pressable>
            );
          })}
        </>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
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
