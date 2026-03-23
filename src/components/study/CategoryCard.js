import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, radii, shadows, spacing } from '../../constants/theme';
import ProgressMeter from '../common/ProgressMeter';

export default function CategoryCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.header}>
        <View style={[styles.iconWrap, { backgroundColor: `${item.accent}18` }]}>
          <MaterialCommunityIcons name={item.icon} size={24} color={item.accent} />
        </View>
        <View style={styles.copy}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={22} color={colors.textSoft} />
      </View>
      <View style={styles.metaRow}>
        <Text style={styles.metaLabel}>{item.answeredCount}/{item.questionCount} đã học</Text>
        <Text style={styles.metaValue}>{item.completionRate}%</Text>
      </View>
      <ProgressMeter value={item.completionRate} accent={item.accent} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  description: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  metaValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
});