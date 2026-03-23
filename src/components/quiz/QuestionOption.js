import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, radii, spacing } from '../../constants/theme';

export default function QuestionOption({ option, state, onPress }) {
  const isSelected = state === 'selected';
  const isCorrect = state === 'correct';
  const isWrong = state === 'wrong';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isSelected && styles.selected,
        isCorrect && styles.correct,
        isWrong && styles.wrong,
        pressed ? styles.pressed : null,
      ]}
    >
      <View style={[styles.bullet, isSelected && styles.selectedBullet, isCorrect && styles.correctBullet, isWrong && styles.wrongBullet]}>
        {isCorrect ? <MaterialCommunityIcons name="check" size={16} color={colors.surface} /> : null}
        {isWrong ? <MaterialCommunityIcons name="close" size={16} color={colors.surface} /> : null}
      </View>
      <Text style={styles.label}>{option.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  selected: {
    borderColor: colors.primary,
    backgroundColor: '#eef5ff',
  },
  correct: {
    borderColor: colors.success,
    backgroundColor: '#effdf5',
  },
  wrong: {
    borderColor: colors.danger,
    backgroundColor: '#fff1f2',
  },
  pressed: {
    opacity: 0.95,
  },
  bullet: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceMuted,
  },
  selectedBullet: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  correctBullet: {
    borderColor: colors.success,
    backgroundColor: colors.success,
  },
  wrongBullet: {
    borderColor: colors.danger,
    backgroundColor: colors.danger,
  },
  label: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    fontWeight: '600',
  },
});
