import { useDeferredValue, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import CategoryCard from '../components/study/CategoryCard';
import { colors, radii, spacing } from '../constants/theme';
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