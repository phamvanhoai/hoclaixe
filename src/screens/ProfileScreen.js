import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import PrimaryButton from '../components/common/PrimaryButton';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';

function SettingRow({ title, subtitle, onPress, danger = false }) {
  return (
    <Pressable onPress={onPress} style={styles.settingRow}>
      <View style={styles.settingCopy}>
        <Text style={[styles.settingTitle, danger && styles.dangerText]}>{title}</Text>
        <Text style={styles.settingSubtitle}>{subtitle}</Text>
      </View>
      <Text style={[styles.chevron, danger && styles.dangerText]}>›</Text>
    </Pressable>
  );
}

export default function ProfileScreen({ navigation }) {
  const { selectedLicense, stats, weeklyActivity, bookmarkedQuestions, resetProgress } = useAppContext();

  return (
    <ScreenContainer>
      <View style={styles.profileCard}>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarText}>HL</Text>
        </View>
        <Text style={styles.name}>Học viên mới</Text>
        <Text style={styles.meta}>Tham gia từ 03/2026 • Mã học viên GPLX-2026-001</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.completionRate}%</Text>
          <Text style={styles.statLabel}>Hoàn thành</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.accuracy}%</Text>
          <Text style={styles.statLabel}>Độ chính xác</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{weeklyActivity}</Text>
          <Text style={styles.statLabel}>7 ngày</Text>
        </View>
      </View>

      <SectionTitle title="Tài khoản và dữ liệu" subtitle="Dữ liệu tiến độ được lưu cục bộ trên thiết bị" />
      <View style={styles.settingsWrap}>
        <SettingRow
          title="Hạng bằng đang học"
          subtitle={`${selectedLicense.code} - ${selectedLicense.title}`}
          onPress={() => navigation.navigate('LicenseTypes')}
        />
        <SettingRow
          title="Câu đã lưu"
          subtitle={`${bookmarkedQuestions.length} câu đánh dấu để xem lại`}
          onPress={() =>
            bookmarkedQuestions.length > 0
              ? navigation.navigate('QuestionSession', {
                  mode: 'review',
                  questionIds: bookmarkedQuestions.map((item) => item.id),
                  title: 'Câu đã đánh dấu',
                  sessionSeed: Date.now(),
                })
              : null
          }
        />
        <SettingRow
          title="Đặt lại tiến độ"
          subtitle="Xóa tiến độ học, lịch sử thi và câu đã lưu"
          danger
          onPress={() =>
            Alert.alert('Đặt lại tiến độ', 'Bạn có chắc muốn xóa toàn bộ dữ liệu học hiện tại?', [
              { text: 'Hủy', style: 'cancel' },
              { text: 'Đặt lại', style: 'destructive', onPress: resetProgress },
            ])
          }
        />
      </View>

      <PrimaryButton label="Ôn lại câu sai" icon="refresh-circle" onPress={() => navigation.navigate('Mistakes')} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
  },
  avatarWrap: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: '900',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text,
  },
  meta: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textMuted,
  },
  settingsWrap: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    padding: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  settingCopy: {
    flex: 1,
    gap: 4,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
  },
  settingSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  chevron: {
    fontSize: 24,
    color: colors.textSoft,
  },
  dangerText: {
    color: colors.danger,
  },
});