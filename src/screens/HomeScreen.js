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
          <Text style={styles.eyebrow}>Học lái xe Việt Nam</Text>
          <Text style={styles.headerTitle}>Dashboard học GPLX</Text>
        </View>
        <Pressable style={styles.headerButton} onPress={() => navigation.navigate('LicenseTypes')}>
          <MaterialCommunityIcons name="tune-variant" size={22} color={colors.text} />
        </Pressable>
      </View>

      <LinearGradient colors={['#0f56b8', '#2f88ff']} style={styles.heroCard}>
        <Text style={styles.heroLabel}>Hạng bằng đang học</Text>
        <View style={styles.heroRow}>
          <View>
            <Text style={styles.heroCode}>{selectedLicense.code}</Text>
            <Text style={styles.heroTitle}>{selectedLicense.title}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('LicenseTypes')} style={styles.heroChip}>
            <Text style={styles.heroChipText}>Đổi hạng</Text>
          </Pressable>
        </View>
        <Text style={styles.heroDescription}>{selectedLicense.description}</Text>
      </LinearGradient>

      <View style={styles.progressCard}>
        <SectionTitle title="Tiến độ tổng quan" subtitle={`${stats.answeredCount}/${stats.totalQuestions} câu đã làm • Độ chính xác ${stats.accuracy}%`} />
        <ProgressMeter value={stats.completionRate} />
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.correctCount}</Text>
            <Text style={styles.statLabel}>Trả lời đúng</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.mistakeCount}</Text>
            <Text style={styles.statLabel}>Cần ôn lại</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{weeklyActivity}</Text>
            <Text style={styles.statLabel}>Hoạt động 7 ngày</Text>
          </View>
        </View>
      </View>

      <SectionTitle title="Công cụ học nhanh" subtitle="Tất cả đều đồng bộ với tiến độ lưu trên thiết bị" />
      <View style={styles.featureGrid}>
        <FeatureCard
          title="Thi thử"
          subtitle={`${selectedLicense.examQuestionCount} câu mô phỏng`}
          icon="clipboard-text-clock-outline"
          tint="#e6f0ff"
          onPress={() => navigation.navigate('QuestionSession', { mode: 'mockTest', title: 'Thi thử mô phỏng', sessionSeed: Date.now() })}
        />
        <FeatureCard
          title="Học theo chủ đề"
          subtitle="Chia theo nhóm câu hỏi để học dần"
          icon="book-open-page-variant-outline"
          tint="#ecfdf5"
          iconColor="#0f766e"
          onPress={() => navigation.navigate('Study')}
        />
        <FeatureCard
          title="Câu sai"
          subtitle="Xem lại những nội dung dễ nhầm lẫn"
          icon="alert-circle-outline"
          tint="#fff1f2"
          iconColor="#dc2626"
          onPress={() => navigation.navigate('Mistakes')}
        />
        <FeatureCard
          title="Biển báo"
          subtitle="Thư viện biển báo hay gặp"
          icon="sign-direction"
          tint="#fff7ed"
          iconColor="#ea580c"
          onPress={() => navigation.navigate('Signs')}
        />
      </View>

      <View style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Sẵn sàng cho buổi thi thật?</Text>
        <Text style={styles.challengeBody}>
          Hoàn thành thêm 3 đề thi thử và giữ độ chính xác trên 80% để đạt mức exam ready.
        </Text>
        <Pressable
          style={styles.challengeButton}
          onPress={() => navigation.navigate('QuestionSession', { mode: 'mockTest', title: 'Thi thử mô phỏng', sessionSeed: Date.now() })}
        >
          <Text style={styles.challengeButtonText}>Bắt đầu đề mới</Text>
          <MaterialCommunityIcons name="arrow-right" size={18} color={colors.surface} />
        </Pressable>
      </View>

      <SectionTitle title="Thi thử gần đây" subtitle="Kết quả đề thi thử mới nhất" actionLabel="Trang đề thi" onPress={() => navigation.navigate('Tests')} />
      {recentTests.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Chưa có đề thi nào được lưu</Text>
          <Text style={styles.emptyBody}>Làm một đề đầu tiên để app bắt đầu theo dõi tiến độ và lịch sử thi thử.</Text>
        </View>
      ) : (
        recentTests.map((item) => (
          <View key={item.id} style={styles.testCard}>
            <View>
              <Text style={styles.testCode}>{item.licenseCode} • {item.title}</Text>
              <Text style={styles.testMeta}>{item.correctCount}/{item.totalQuestions} câu đúng • {item.scoreRate}%</Text>
            </View>
            <View style={[styles.resultPill, { backgroundColor: item.isPassed ? '#dcfce7' : '#fee2e2' }]}>
              <Text style={[styles.resultPillText, { color: item.isPassed ? colors.success : colors.danger }]}>
                {item.isPassed ? 'Đạt' : 'Cần học thêm'}
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