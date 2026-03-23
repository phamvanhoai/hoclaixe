import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDeferredValue, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import CategoryCard from '../components/study/CategoryCard';
import ProgressMeter from '../components/common/ProgressMeter';
import { colors, radii, shadows, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import { getCategoryProgress, normalizeVietnameseText } from '../utils/quiz';

export default function StudyScreen({ navigation }) {
  const { questions, state, stats, selectedLicense, bookmarkedQuestions, mistakeQuestions } = useAppContext();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(normalizeVietnameseText(query));

  const categories = getCategoryProgress(questions, state.questionProgress).filter((item) => {
    if (!deferredQuery) {
      return true;
    }

    return normalizeVietnameseText(`${item.title} ${item.description}`).includes(deferredQuery);
  });

  return (
    <ScreenContainer>
      <SectionTitle
        title="Học theo chủ đề"
        subtitle={`Hạng ${selectedLicense.code} • ${stats.answeredCount}/${stats.totalQuestions} câu đã làm`}
        actionLabel="Đổi hạng"
        onPress={() => navigation.navigate('LicenseTypes')}
      />

      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Tìm chủ đề, quy tắc, biển báo..."
          placeholderTextColor={colors.textSoft}
          style={styles.searchInput}
        />
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('QuestionSession', {
            mode: 'practice',
            title: 'Học toàn bộ câu hỏi',
            sessionSeed: Date.now(),
          })
        }
        style={({ pressed }) => [styles.studyAllCard, pressed && styles.pressed]}
      >
        <View style={styles.studyAllHeader}>
          <View style={styles.studyAllCopy}>
            <Text style={styles.studyAllEyebrow}>Study All Questions</Text>
            <Text style={styles.studyAllTitle}>Học toàn bộ câu hỏi</Text>
            <Text style={styles.studyAllBody}>
              Ôn tuần tự toàn bộ ngân hàng câu hỏi của hạng {selectedLicense.code} để nắm chắc nền tảng trước khi thi thử.
            </Text>
          </View>
          <View style={styles.studyAllIconWrap}>
            <MaterialCommunityIcons name="book-open-page-variant" size={24} color={colors.primary} />
          </View>
        </View>

        <View style={styles.studyAllStatsRow}>
          <View>
            <Text style={styles.studyAllMetaLabel}>Tổng tiến độ</Text>
            <Text style={styles.studyAllMetaValue}>{stats.answeredCount}/{stats.totalQuestions} câu</Text>
          </View>
          <View style={styles.studyAllBadge}>
            <Text style={styles.studyAllBadgeText}>{stats.completionRate}% hoàn thành</Text>
          </View>
        </View>

        <ProgressMeter value={stats.completionRate} height={12} />

        <View style={styles.studyAllFooter}>
          <Text style={styles.studyAllHint}>
            {stats.completionRate === 100 ? 'Bạn đã hoàn thành toàn bộ phần học này.' : 'Tiếp tục từng câu để tăng độ nhớ lâu và đều hơn.'}
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={22} color={colors.primary} />
        </View>
      </Pressable>

      <View style={styles.quickRow}>
        <Pressable style={styles.quickCard} onPress={() => navigation.navigate('Mistakes')}>
          <Text style={styles.quickValue}>{mistakeQuestions.length}</Text>
          <Text style={styles.quickLabel}>Câu sai cần ôn</Text>
        </Pressable>
        <Pressable
          style={styles.quickCard}
          onPress={() => {
            if (bookmarkedQuestions.length > 0) {
              navigation.navigate('QuestionSession', {
                mode: 'review',
                questionIds: bookmarkedQuestions.map((item) => item.id),
                title: 'Câu đã đánh dấu',
                sessionSeed: Date.now(),
              });
            }
          }}
        >
          <Text style={styles.quickValue}>{bookmarkedQuestions.length}</Text>
          <Text style={styles.quickLabel}>Câu đã lưu</Text>
        </Pressable>
      </View>

      <SectionTitle title="Danh mục chủ đề" subtitle={`${categories.length} nhóm câu hỏi theo chuyên đề`} />

      {categories.length === 0 ? (
        <EmptyState
          icon="magnify"
          title="Không tìm thấy chủ đề phù hợp"
          description="Thử đổi từ khóa tìm kiếm hoặc xóa bộ lọc hiện tại."
        />
      ) : (
        categories.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
            onPress={() =>
              navigation.navigate('QuestionSession', {
                mode: 'practice',
                categoryId: item.id,
                title: item.title,
                sessionSeed: Date.now(),
              })
            }
          />
        ))
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.995 }],
  },
  searchWrap: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },
  searchInput: {
    minHeight: 52,
    color: colors.text,
    fontSize: 15,
  },
  studyAllCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card,
  },
  studyAllHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  studyAllCopy: {
    flex: 1,
    gap: 6,
  },
  studyAllEyebrow: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: colors.primary,
  },
  studyAllTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: colors.text,
  },
  studyAllBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  studyAllIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studyAllStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: spacing.md,
  },
  studyAllMetaLabel: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: colors.textSoft,
  },
  studyAllMetaValue: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '900',
    color: colors.text,
  },
  studyAllBadge: {
    borderRadius: radii.md,
    backgroundColor: colors.primaryMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  studyAllBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  studyAllFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  studyAllHint: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
  quickRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  quickCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: 4,
  },
  quickValue: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text,
  },
  quickLabel: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
});