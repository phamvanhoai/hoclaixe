import { useDeferredValue, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import SignCard from '../components/signs/SignCard';
import { colors, radii, spacing } from '../constants/theme';
import { ROAD_SIGNS } from '../data/signs';
import { normalizeVietnameseText } from '../utils/quiz';

export default function SignsScreen() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(normalizeVietnameseText(query));

  const signs = ROAD_SIGNS.filter((item) => {
    if (!deferredQuery) {
      return true;
    }

    return normalizeVietnameseText(`${item.code} ${item.name} ${item.group} ${item.meaning}`).includes(deferredQuery);
  });

  return (
    <ScreenContainer>
      <SectionTitle title="Thư viện biển báo" subtitle="Tra nhanh các biển báo cơ bản thường gặp trong đề lý thuyết" />
      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Tìm mã biển, tên biển, nhóm biển..."
          placeholderTextColor={colors.textSoft}
          style={styles.searchInput}
        />
      </View>
      {signs.length === 0 ? (
        <EmptyState
          icon="sign-direction-remove"
          title="Không có biển báo phù hợp"
          description="Thử đổi từ khóa để tìm nhanh mã biển hoặc nhóm biển."
        />
      ) : (
        signs.map((item) => <SignCard key={item.id} sign={item} />)
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
});