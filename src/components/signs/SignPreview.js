import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const palette = {
  red: '#d12a2a',
  blue: '#1767cf',
  yellow: '#ffd54f',
  white: '#ffffff',
  black: '#111827',
  plate: '#ffffff',
  plateBorder: '#d9e4ef',
  muted: '#f5f8fb',
};

function Plate({ size, children }) {
  return (
    <View
      style={[
        styles.plate,
        {
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.18),
        },
      ]}
    >
      {children}
    </View>
  );
}

function ProhibitionSign({ size, children }) {
  return (
    <View
      style={[
        styles.circleShell,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: palette.red,
        },
      ]}
    >
      <View
        style={[
          styles.circleCore,
          {
            width: size * 0.7,
            height: size * 0.7,
            borderRadius: (size * 0.7) / 2,
            backgroundColor: palette.white,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

function CommandSign({ size, children }) {
  return (
    <View
      style={[
        styles.circleShell,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: palette.blue,
        },
      ]}
    >
      {children}
    </View>
  );
}

function GuideSign({ size, label }) {
  return (
    <View
      style={[
        styles.squareSign,
        {
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.1),
        },
      ]}
    >
      <Text style={[styles.guideLabel, { fontSize: size * 0.44 }]}>{label}</Text>
    </View>
  );
}

function WarningSign({ size, iconName, iconSize, showZebra = false }) {
  const height = size * 0.88;

  return (
    <View style={[styles.warningWrap, { width: size, height }]}> 
      <View
        style={[
          styles.warningOuter,
          {
            borderLeftWidth: size / 2,
            borderRightWidth: size / 2,
            borderBottomWidth: height,
          },
        ]}
      />
      <View
        style={[
          styles.warningInner,
          {
            borderLeftWidth: size * 0.43,
            borderRightWidth: size * 0.43,
            borderBottomWidth: height * 0.79,
            bottom: height * 0.05,
          },
        ]}
      />
      <View style={[styles.warningContent, { bottom: height * 0.17 }]}> 
        <MaterialCommunityIcons name={iconName} size={iconSize} color={palette.black} />
        {showZebra ? (
          <View style={styles.zebraRow}>
            <View style={styles.zebraBar} />
            <View style={styles.zebraBar} />
            <View style={styles.zebraBar} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

function StopSign({ size }) {
  const bodySize = size * 0.68;
  return (
    <View style={[styles.stopWrap, { width: size, height: size }]}> 
      <View
        style={[
          styles.stopBody,
          {
            width: bodySize,
            height: bodySize,
            borderRadius: bodySize * 0.16,
            borderWidth: Math.max(3, size * 0.045),
          },
        ]}
      />
      <Text style={[styles.stopText, { fontSize: size * 0.19 }]}>STOP</Text>
    </View>
  );
}

function renderGraphic(sign, size) {
  switch (sign.id) {
    case 'sign-no-entry':
      return (
        <ProhibitionSign size={size}>
          <View
            style={[
              styles.noEntryBar,
              {
                width: size * 0.48,
                height: size * 0.12,
                borderRadius: size * 0.06,
              },
            ]}
          />
        </ProhibitionSign>
      );
    case 'sign-no-turn-left':
      return (
        <ProhibitionSign size={size}>
          <View style={styles.centered}>
            <Text style={[styles.turnArrow, { fontSize: size * 0.35 }]}>↰</Text>
            <View
              style={[
                styles.slash,
                {
                  width: size * 0.52,
                  height: size * 0.08,
                  borderRadius: size * 0.04,
                },
              ]}
            />
          </View>
        </ProhibitionSign>
      );
    case 'sign-speed-limit':
      return (
        <ProhibitionSign size={size}>
          <Text style={[styles.speedText, { fontSize: size * 0.28 }]}>50</Text>
        </ProhibitionSign>
      );
    case 'sign-roundabout':
      return (
        <CommandSign size={size}>
          <MaterialCommunityIcons name="cached" size={size * 0.42} color={palette.white} />
        </CommandSign>
      );
    case 'sign-straight':
      return (
        <CommandSign size={size}>
          <MaterialCommunityIcons name="arrow-up-thick" size={size * 0.46} color={palette.white} />
        </CommandSign>
      );
    case 'sign-pedestrian':
      return <WarningSign size={size} iconName="walk" iconSize={size * 0.26} showZebra />;
    case 'sign-school':
      return <WarningSign size={size} iconName="human-child" iconSize={size * 0.25} />;
    case 'sign-parking':
      return <GuideSign size={size * 0.9} label="P" />;
    case 'sign-hospital':
      return <GuideSign size={size * 0.9} label="H" />;
    case 'sign-stop':
      return <StopSign size={size} />;
    default:
      return (
        <CommandSign size={size}>
          <MaterialCommunityIcons name="sign-direction" size={size * 0.4} color={palette.white} />
        </CommandSign>
      );
  }
}

export default function SignPreview({ sign, size = 96 }) {
  const previewSize = Math.max(72, size);
  const signSize = previewSize * 0.8;

  return (
    <Plate size={previewSize}>
      {renderGraphic(sign, signSize)}
    </Plate>
  );
}

const styles = StyleSheet.create({
  plate: {
    backgroundColor: palette.plate,
    borderWidth: 1,
    borderColor: palette.plateBorder,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleShell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleCore: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  squareSign: {
    backgroundColor: palette.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: palette.white,
  },
  guideLabel: {
    color: palette.white,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  warningWrap: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  warningOuter: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: palette.red,
    position: 'absolute',
    bottom: 0,
  },
  warningInner: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: palette.yellow,
    position: 'absolute',
  },
  warningContent: {
    position: 'absolute',
    alignItems: 'center',
    gap: 2,
  },
  zebraRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: -2,
  },
  zebraBar: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: palette.black,
  },
  stopWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopBody: {
    position: 'absolute',
    backgroundColor: palette.red,
    borderColor: palette.white,
    transform: [{ rotate: '45deg' }],
  },
  stopText: {
    color: palette.white,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  noEntryBar: {
    backgroundColor: palette.red,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slash: {
    position: 'absolute',
    backgroundColor: palette.red,
    transform: [{ rotate: '-45deg' }],
  },
  turnArrow: {
    color: palette.black,
    fontWeight: '900',
  },
  speedText: {
    color: palette.black,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
});