import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, radii, spacing } from '../../constants/theme';

export default function PrimaryButton({
  label,
  onPress,
  icon,
  variant = 'primary',
  loading = false,
  disabled = false,
}) {
  const isGhost = variant === 'ghost';
  const isSecondary = variant === 'secondary';
  const isDanger = variant === 'danger';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        isGhost && styles.ghostButton,
        isSecondary && styles.secondaryButton,
        isDanger && styles.dangerButton,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isSecondary || isGhost ? colors.primary : colors.surface} />
      ) : (
        <>
          {icon ? (
            <MaterialCommunityIcons
              name={icon}
              size={18}
              color={isSecondary || isGhost ? colors.primary : colors.surface}
            />
          ) : null}
          <Text
            style={[
              styles.label,
              (isSecondary || isGhost) && styles.secondaryLabel,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    borderRadius: radii.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  secondaryButton: {
    backgroundColor: colors.primaryMuted,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryLabel: {
    color: colors.primary,
  },
});
