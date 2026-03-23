import { StyleSheet, View } from 'react-native';

import { colors, radii } from '../../constants/theme';

export default function ProgressMeter({ value, accent = colors.primary, height = 10 }) {
  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      <View
        style={[
          styles.fill,
          {
            width: `${Math.max(0, Math.min(100, value))}%`,
            backgroundColor: accent,
            borderRadius: height / 2,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: colors.surfaceMuted,
    overflow: 'hidden',
    borderRadius: radii.pill,
  },
  fill: {
    height: '100%',
  },
});
