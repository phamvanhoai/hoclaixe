import { StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import PrimaryButton from '../components/common/PrimaryButton';
import { colors, radii, spacing } from '../constants/theme';

export default function ResultScreen({ navigation, route }) {
  const result = route.params?.result;
  const restartConfig = route.params?.restartConfig;

  if (!result) {
    return null;
  }

  return (
    <ScreenContainer>
      <View style={[styles.heroCard, { backgroundColor: result.isPassed ? '#dcfce7' : '#fee2e2' }]}>
        <Text style={[styles.heroEyebrow, { color: result.isPassed ? colors.success : colors.danger }]}>
          {result.isPassed ? 'Dat muc tieu' : 'Can hoc them'}
        </Text>
        <Text style={styles.heroTitle}>{result.correctCount}/{result.totalQuestions} cau dung</Text>
        <Text style={styles.heroBody}>{result.title} • Hang {result.licenseCode} • {result.scoreRate}%</Text>
      </View>

      <View style={styles.metricCard}>
        <View style={styles.metricRow}>
          <Text style={styles.metricLabel}>Muc tieu</Text>
          <Text style={styles.metricValue}>{result.targetScore} cau</Text>
        </View>
        <View style={styles.metricRow}>
          <Text style={styles.metricLabel}>So cau sai</Text>
          <Text style={styles.metricValue}>{result.incorrectCount}</Text>
        </View>
        <View style={styles.metricRow}>
          <Text style={styles.metricLabel}>So cau da tra loi</Text>
          <Text style={styles.metricValue}>{result.answeredCount}</Text>
        </View>
      </View>

      <PrimaryButton
        label="Lam lai"
        icon="refresh"
        onPress={() => navigation.replace('QuestionSession', { ...restartConfig, sessionSeed: Date.now() })}
      />
      <PrimaryButton label="Xem cau sai" variant="secondary" icon="alert-circle-outline" onPress={() => navigation.navigate('Mistakes')} />
      <PrimaryButton label="Ve trang chu" variant="ghost" onPress={() => navigation.navigate('MainTabs')} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    borderRadius: radii.lg,
    padding: spacing.xl,
    gap: spacing.sm,
  },
  heroEyebrow: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
  },
  heroBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  metricCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 15,
    color: colors.textMuted,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
});
