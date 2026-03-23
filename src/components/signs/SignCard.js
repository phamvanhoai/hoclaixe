import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, shadows, spacing } from '../../constants/theme';
import SignPreview from './SignPreview';

export default function SignCard({ sign }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <SignPreview sign={sign} size={110} />
        <View style={styles.headerCopy}>
          <View style={[styles.badge, { backgroundColor: `${sign.accent}18`, borderColor: sign.accent }]}> 
            <Text style={[styles.code, { color: sign.accent }]}>{sign.code}</Text>
          </View>
          <Text style={styles.name}>{sign.name}</Text>
          <Text style={styles.group}>{sign.group}</Text>
        </View>
      </View>
      <Text style={styles.meaning}>{sign.meaning}</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  headerCopy: {
    flex: 1,
    gap: 6,
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
  name: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.text,
    lineHeight: 22,
  },
  group: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.textSoft,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  meaning: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
});