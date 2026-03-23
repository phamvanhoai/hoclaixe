import { Pressable, StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import PrimaryButton from '../components/common/PrimaryButton';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';

export default function TestsScreen({ navigation }) {
  const { selectedLicense, state } = useAppContext();
  const recentTests = state.mockTests;

  return (
    <ScreenContainer>
      <SectionTitle
        title="Thi thu mo phong"
        subtitle={`Hang ${selectedLicense.code} • ${selectedLicense.examQuestionCount} cau / muc tieu ${selectedLicense.targetScore} cau dung`}
      />

      <View style={styles.heroCard}>
        <Text style={styles.heroEyebrow}>De thi hien tai</Text>
        <Text style={styles.heroTitle}>{selectedLicense.code} - {selectedLicense.title}</Text>
        <Text style={styles.heroBody}>{selectedLicense.description}</Text>
        <PrimaryButton
          label="Bat dau thi thu"
          icon="play-circle-outline"
          onPress={() =>
            navigation.navigate('QuestionSession', {
              mode: 'mockTest',
              title: 'Thi thu mo phong',
              sessionSeed: Date.now(),
            })
          }
        />
      </View>

      <SectionTitle title="Lich su de thi" subtitle="Ket qua luu bang AsyncStorage tren thiet bi" />
      {recentTests.length === 0 ? (
        <EmptyState
          icon="clipboard-text-clock-outline"
          title="Ban chua co de thi nao"
          description="Sau khi hoan thanh thi thu, ket qua se hien o day de ban theo doi tien bo."
        />
      ) : (
        recentTests.map((item) => (
          <Pressable key={item.id} style={styles.historyCard}>
            <View style={styles.historyCopy}>
              <Text style={styles.historyTitle}>{item.licenseCode} • {item.title}</Text>
              <Text style={styles.historyMeta}>{item.correctCount}/{item.totalQuestions} cau dung • Muc tieu {item.targetScore}</Text>
            </View>
            <View style={[styles.historyPill, { backgroundColor: item.isPassed ? '#dcfce7' : '#fee2e2' }]}>
              <Text style={[styles.historyPillLabel, { color: item.isPassed ? colors.success : colors.danger }]}>
                {item.isPassed ? 'Dat' : 'Chua dat'}
              </Text>
            </View>
          </Pressable>
        ))
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#0f172a',
    borderRadius: radii.lg,
    padding: spacing.xl,
    gap: spacing.md,
  },
  heroEyebrow: {
    color: '#93c5fd',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: colors.surface,
    fontSize: 24,
    fontWeight: '900',
  },
  heroBody: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  historyCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  historyCopy: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
  },
  historyMeta: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textMuted,
  },
  historyPill: {
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  historyPillLabel: {
    fontWeight: '800',
    fontSize: 12,
  },
});
