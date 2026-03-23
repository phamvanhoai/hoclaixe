import { useDeferredValue, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import CategoryCard from '../components/study/CategoryCard';
import { colors, radii, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import { getCategoryProgress } from '../utils/quiz';

export default function StudyScreen({ navigation }) {
  const { questions, state, stats, selectedLicense, bookmarkedQuestions, mistakeQuestions } = useAppContext();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const categories = getCategoryProgress(questions, state.questionProgress).filter((item) => {
    if (!deferredQuery) {
      return true;
    }

    return (`${item.title} ${item.description}`).toLowerCase().includes(deferredQuery);
  });

  return (
    <ScreenContainer>
      <SectionTitle
        title="Hoc theo chu de"
        subtitle={`Hang ${selectedLicense.code} • ${stats.answeredCount}/${stats.totalQuestions} cau da lam`}
        actionLabel="Doi hang"
        onPress={() => navigation.navigate('LicenseTypes')}
      />

      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Tim chu de, quy tac, bien bao..."
          placeholderTextColor={colors.textSoft}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.quickRow}>
        <Pressable style={styles.quickCard} onPress={() => navigation.navigate('Mistakes')}>
          <Text style={styles.quickValue}>{mistakeQuestions.length}</Text>
          <Text style={styles.quickLabel}>Cau sai can on</Text>
        </Pressable>
        <Pressable
          style={styles.quickCard}
          onPress={() => {
            if (bookmarkedQuestions.length > 0) {
              navigation.navigate('QuestionSession', {
                mode: 'review',
                questionIds: bookmarkedQuestions.map((item) => item.id),
                title: 'Cau da danh dau',
                sessionSeed: Date.now(),
              });
            }
          }}
        >
          <Text style={styles.quickValue}>{bookmarkedQuestions.length}</Text>
          <Text style={styles.quickLabel}>Cau da luu</Text>
        </Pressable>
      </View>

      {categories.length === 0 ? (
        <EmptyState
          icon="magnify"
          title="Khong tim thay chu de phu hop"
          description="Thu doi tu khoa tim kiem hoac xoa bo loc hien tai."
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
