import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, shadows, spacing } from '../../constants/theme';

export default function SignCard({ sign }) {
  return (
    <View style={styles.card}>
      <View style={[styles.badge, { backgroundColor: `${sign.accent}18`, borderColor: sign.accent }]}> 
        <Text style={[styles.code, { color: sign.accent }]}>{sign.code}</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>{sign.name}</Text>
        <Text style={styles.group}>{sign.group}</Text>
        <Text style={styles.meaning}>{sign.meaning}</Text>
      </View>
    </View>
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
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
    borderWidth: 1,
  },
  code: {
    fontSize: 12,
    fontWeight: '800',
  },
  copy: {
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  group: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSoft,
    textTransform: 'uppercase',
  },
  meaning: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
