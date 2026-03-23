import { useDeferredValue, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import SignCard from '../components/signs/SignCard';
import { colors, radii, spacing } from '../constants/theme';
import { ROAD_SIGNS } from '../data/signs';

export default function SignsScreen() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const signs = ROAD_SIGNS.filter((item) => {
    if (!deferredQuery) {
      return true;
    }

    return (`${item.code} ${item.name} ${item.group} ${item.meaning}`).toLowerCase().includes(deferredQuery);
  });

  return (
    <ScreenContainer>
      <SectionTitle title="Thu vien bien bao" subtitle="Tra nhanh cac bien bao co ban thuong gap trong de ly thuyet" />
      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Tim ma bien, ten bien, nhom bien..."
          placeholderTextColor={colors.textSoft}
          style={styles.searchInput}
        />
      </View>
      {signs.length === 0 ? (
        <EmptyState
          icon="sign-direction-remove"
          title="Khong co bien bao phu hop"
          description="Thu doi tu khoa de tim nhanh ma bien hoac nhom bien."
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
