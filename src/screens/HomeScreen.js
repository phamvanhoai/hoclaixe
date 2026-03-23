import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import ProgressMeter from '../components/common/ProgressMeter';
import FeatureCard from '../components/home/FeatureCard';
import { colors, radii, shadows, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const { selectedLicense, stats, weeklyActivity, state } = useAppContext();
  const recentTests = state.mockTests.slice(0, 2);

  return (
    <ScreenContainer>
      <View style={styles.headerRow}>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarText}>HL</Text>
        </View>
        <View style={styles.headerCopy}>
          <Text style={styles.eyebrow}>Hoc lai xe Viet Nam</Text>
          <Text style={styles.headerTitle}>Dashboard hoc GPLX</Text>
        </View>
        <Pressable style={styles.headerButton} onPress={() => navigation.navigate('LicenseTypes')}>
          <MaterialCommunityIcons name="tune-variant" size={22} color={colors.text} />
        </Pressable>
      </View>

      <LinearGradient colors={['#0f56b8', '#2f88ff']} style={styles.heroCard}>
        <Text style={styles.heroLabel}>Hang bang dang hoc</Text>
        <View style={styles.heroRow}>
          <View>
            <Text style={styles.heroCode}>{selectedLicense.code}</Text>
            <Text style={styles.heroTitle}>{selectedLicense.title}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('LicenseTypes')} style={styles.heroChip}>
            <Text style={styles.heroChipText}>Doi hang</Text>
          </Pressable>
        </View>
        <Text style={styles.heroDescription}>{selectedLicense.description}</Text>
      </LinearGradient>

      <View style={styles.progressCard}>
        <SectionTitle title="Tien do tong quan" subtitle={`${stats.answeredCount}/${stats.totalQuestions} cau da lam • Do chinh xac ${stats.accuracy}%`} />
        <ProgressMeter value={stats.completionRate} />
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.correctCount}</Text>
            <Text style={styles.statLabel}>Tra loi dung</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.mistakeCount}</Text>
            <Text style={styles.statLabel}>Can on lai</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{weeklyActivity}</Text>
            <Text style={styles.statLabel}>Hoat dong 7 ngay</Text>
          </View>
        </View>
      </View>

      <SectionTitle title="Cong cu hoc nhanh" subtitle="Tat ca deu dong bo voi tien do AsyncStorage cua ban" />
      <View style={styles.featureGrid}>
        <FeatureCard
          title="Thi thu"
          subtitle={`${selectedLicense.examQuestionCount} cau mo phong`}
          icon="clipboard-text-clock-outline"
          tint="#e6f0ff"
          onPress={() => navigation.navigate('QuestionSession', { mode: 'mockTest', title: 'Thi thu mo phong', sessionSeed: Date.now() })}
        />
        <FeatureCard
          title="Hoc theo chu de"
          subtitle="Chia theo nhom cau hoi de hoc dan"
          icon="book-open-page-variant-outline"
          tint="#ecfdf5"
          iconColor="#0f766e"
          onPress={() => navigation.navigate('Study')}
        />
        <FeatureCard
          title="Cau sai"
          subtitle="Xem lai nhung noi de nham lan"
          icon="alert-circle-outline"
          tint="#fff1f2"
          iconColor="#dc2626"
          onPress={() => navigation.navigate('Mistakes')}
        />
        <FeatureCard
          title="Bien bao"
          subtitle="Thu vien bien bao hay gap"
          icon="sign-direction"
          tint="#fff7ed"
          iconColor="#ea580c"
          onPress={() => navigation.navigate('Signs')}
        />
      </View>

      <View style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>San sang cho buoi thi that?</Text>
        <Text style={styles.challengeBody}>
          Hoan thanh them 3 de thi thu va giu do chinh xac tren 80% de dat muc exam ready.
        </Text>
        <Pressable
          style={styles.challengeButton}
          onPress={() => navigation.navigate('QuestionSession', { mode: 'mockTest', title: 'Thi thu mo phong', sessionSeed: Date.now() })}
        >
          <Text style={styles.challengeButtonText}>Bat dau de moi</Text>
          <MaterialCommunityIcons name="arrow-right" size={18} color={colors.surface} />
        </Pressable>
      </View>

      <SectionTitle title="Thi thu gan day" subtitle="Ket qua de thi thu moi nhat" actionLabel="Trang de thi" onPress={() => navigation.navigate('Tests')} />
      {recentTests.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Chua co de thi nao duoc luu</Text>
          <Text style={styles.emptyBody}>Lam mot de dau tien de app bat dau theo doi tien do va lich su thi thu.</Text>
        </View>
      ) : (
        recentTests.map((item) => (
          <View key={item.id} style={styles.testCard}>
            <View>
              <Text style={styles.testCode}>{item.licenseCode} • {item.title}</Text>
              <Text style={styles.testMeta}>{item.correctCount}/{item.totalQuestions} cau dung • {item.scoreRate}%</Text>
            </View>
            <View style={[styles.resultPill, { backgroundColor: item.isPassed ? '#dcfce7' : '#fee2e2' }]}>
              <Text style={[styles.resultPillText, { color: item.isPassed ? colors.success : colors.danger }]}>
                {item.isPassed ? 'Dat' : 'Can hoc them'}
              </Text>
            </View>
          </View>
        ))
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
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.primary,
    fontWeight: '800',
  },
  headerCopy: {
    flex: 1,
    gap: 2,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSoft,
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  heroCard: {
    borderRadius: radii.lg,
    padding: spacing.xl,
    gap: spacing.md,
    ...shadows.card,
  },
  heroLabel: {
    color: '#dbeafe',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  heroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  heroCode: {
    color: colors.surface,
    fontSize: 34,
    fontWeight: '900',
  },
  heroTitle: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
    maxWidth: 220,
  },
  heroChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  heroChipText: {
    color: colors.surface,
    fontWeight: '700',
    fontSize: 12,
  },
  heroDescription: {
    color: '#e6f0ff',
    fontSize: 14,
    lineHeight: 20,
  },
  progressCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card,
  },
  statRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statBox: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.md,
    gap: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 16,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  challengeCard: {
    backgroundColor: '#0f172a',
    borderRadius: radii.lg,
    padding: spacing.xl,
    gap: spacing.md,
  },
  challengeTitle: {
    color: colors.surface,
    fontSize: 21,
    fontWeight: '800',
  },
  challengeBody: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  challengeButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  challengeButtonText: {
    color: colors.surface,
    fontWeight: '800',
    fontSize: 13,
  },
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  emptyBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  testCard: {
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
  testCode: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  testMeta: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 13,
  },
  resultPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
  },
  resultPillText: {
    fontSize: 12,
    fontWeight: '800',
  },
});
