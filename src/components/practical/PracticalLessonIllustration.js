import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, radii, spacing } from '../../constants/theme';

function VehicleToken({ type = 'car', style, rotate = '0deg', tint }) {
  return (
    <View style={[styles.vehicleToken, { backgroundColor: tint, transform: [{ rotate }] }, style]}>
      <MaterialCommunityIcons
        name={type === 'bike' ? 'motorbike' : 'car-side'}
        size={type === 'bike' ? 20 : 22}
        color={colors.surface}
      />
    </View>
  );
}

function DashRow({ count = 7, style }) {
  return (
    <View style={[styles.dashRow, style]}>
      {Array.from({ length: count }).map((_, index) => (
        <View key={`dash-row-${index}`} style={styles.dashSegment} />
      ))}
    </View>
  );
}

function DashColumn({ count = 6, style }) {
  return (
    <View style={[styles.dashColumn, style]}>
      {Array.from({ length: count }).map((_, index) => (
        <View key={`dash-column-${index}`} style={styles.dashSegmentVertical} />
      ))}
    </View>
  );
}

function Road({ style, children }) {
  return <View style={[styles.road, style]}>{children}</View>;
}

function Crosswalk({ style }) {
  return (
    <View style={[styles.crosswalk, style]}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={`crosswalk-${index}`} style={styles.crosswalkStripe} />
      ))}
    </View>
  );
}

function ParkingBox({ style, horizontal = false }) {
  return (
    <View style={[styles.parkingBox, horizontal && styles.parkingBoxHorizontal, style]}>
      <Text style={styles.parkingText}>P</Text>
    </View>
  );
}

function TrafficLight({ style }) {
  return (
    <View style={[styles.trafficLight, style]}>
      <View style={[styles.lightDot, { backgroundColor: '#ef4444' }]} />
      <View style={[styles.lightDot, { backgroundColor: '#f59e0b' }]} />
      <View style={[styles.lightDot, { backgroundColor: '#22c55e' }]} />
    </View>
  );
}

function RailwayTrack({ style }) {
  return (
    <View style={[styles.railTrackWrap, style]}>
      <View style={[styles.railLine, styles.railLineLeft]} />
      <View style={[styles.railLine, styles.railLineRight]} />
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={`rail-sleeper-${index}`} style={[styles.railSleeper, { left: 10 + index * 26 }]} />
      ))}
    </View>
  );
}

function SpeedBadge({ label, style }) {
  return (
    <View style={[styles.speedBadge, style]}>
      <Text style={styles.speedText}>{label}</Text>
    </View>
  );
}

function renderCarLesson(lessonId, accent) {
  switch (lessonId) {
    case 'car-01':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <View style={styles.startLine} />
          <VehicleToken tint={accent} style={styles.startCar} />
          <View style={styles.cornerBadge}>
            <MaterialCommunityIcons name="flag-checkered" size={18} color={accent} />
            <Text style={styles.badgeText}>Xuất phát</Text>
          </View>
        </>
      );
    case 'car-02':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <Crosswalk style={styles.crosswalkCenter} />
          <VehicleToken tint={accent} style={styles.approachCar} />
          <View style={styles.walkWrap}>
            <MaterialCommunityIcons name="walk" size={20} color={colors.text} />
          </View>
        </>
      );
    case 'car-03':
      return (
        <>
          <View style={styles.hillRoad} />
          <View style={styles.hillRoadEdge} />
          <VehicleToken tint={accent} rotate="-18deg" style={styles.hillCar} />
          <View style={styles.stopMarker}>
            <Text style={styles.stopMarkerText}>DỪNG</Text>
          </View>
        </>
      );
    case 'car-04':
      return (
        <>
          <Road style={styles.verticalRoad}>
            <DashColumn style={styles.verticalDash} />
          </Road>
          <Road style={styles.cornerRoad}>
            <DashRow style={styles.cornerDash} />
          </Road>
          <VehicleToken tint={accent} rotate="90deg" style={styles.cornerCar} />
          <View style={styles.wheelTrack} />
          <View style={[styles.wheelTrack, styles.wheelTrackSecond]} />
        </>
      );
    case 'car-05':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <Road style={styles.crossRoad}>
            <DashColumn style={styles.crossDash} />
          </Road>
          <TrafficLight style={styles.trafficLightPos} />
          <VehicleToken tint={accent} style={styles.intersectionCar} />
        </>
      );
    case 'car-06':
      return (
        <>
          <View style={styles.curveOne} />
          <View style={styles.curveTwo} />
          <View style={styles.curveThree} />
          <MaterialCommunityIcons name="chevron-double-right" size={28} color={accent} style={styles.curveArrowOne} />
          <MaterialCommunityIcons name="chevron-double-left" size={28} color={accent} style={styles.curveArrowTwo} />
          <VehicleToken tint={accent} style={styles.curveCar} />
        </>
      );
    case 'car-07':
      return (
        <>
          <Road style={styles.parkingRoadVertical}>
            <DashColumn style={styles.verticalDash} />
          </Road>
          <ParkingBox style={styles.parallelBox} />
          <VehicleToken tint={accent} rotate="90deg" style={styles.parallelCar} />
          <MaterialCommunityIcons name="arrow-down-left" size={24} color={accent} style={styles.parallelArrow} />
        </>
      );
    case 'car-08':
      return (
        <>
          <Road style={styles.parkingRoadBottom}>
            <DashRow style={styles.parkingBottomDash} />
          </Road>
          <ParkingBox horizontal style={styles.reverseBox} />
          <VehicleToken tint={accent} style={styles.reverseCar} />
          <MaterialCommunityIcons name="arrow-u-left-top" size={24} color={accent} style={styles.reverseArrow} />
        </>
      );
    case 'car-09':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <RailwayTrack style={styles.railTrackPos} />
          <VehicleToken tint={accent} style={styles.railCar} />
          <MaterialCommunityIcons name="train-car" size={24} color={colors.warning} style={styles.trainIcon} />
        </>
      );
    case 'car-10':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <VehicleToken tint={accent} style={styles.speedCar} />
          <SpeedBadge label="20" style={styles.speedBadgeLeft} />
          <SpeedBadge label="S2" style={styles.speedBadgeRight} />
          <MaterialCommunityIcons name="arrow-right-bold" size={22} color={accent} style={styles.speedArrow} />
        </>
      );
    case 'car-11':
      return (
        <>
          <Road style={styles.horizontalRoad}>
            <DashRow style={styles.centerDash} />
          </Road>
          <VehicleToken tint={accent} style={styles.finishCar} />
          <View style={styles.finishLine} />
          <MaterialCommunityIcons name="flag-checkered" size={26} color={accent} style={styles.finishFlag} />
        </>
      );
    default:
      return (
        <View style={styles.centeredHint}>
          <MaterialCommunityIcons name="traffic-cone" size={34} color={accent} />
          <Text style={styles.fallbackText}>Minh họa sa hình</Text>
        </View>
      );
  }
}

function renderBikeLesson(lessonId, accent) {
  switch (lessonId) {
    case 'bike-01':
      return (
        <>
          <View style={styles.figureEightLeft} />
          <View style={styles.figureEightRight} />
          <VehicleToken type="bike" tint={accent} style={styles.figureEightBike} />
        </>
      );
    case 'bike-02':
      return (
        <>
          <View style={styles.straightLaneLeft} />
          <View style={styles.straightLaneRight} />
          <DashColumn style={styles.straightCenterDash} count={7} />
          <VehicleToken type="bike" tint={accent} rotate="90deg" style={styles.straightBike} />
        </>
      );
    case 'bike-03':
      return (
        <>
          <View style={styles.straightLaneLeft} />
          <View style={styles.straightLaneRight} />
          <VehicleToken type="bike" tint={accent} rotate="90deg" style={styles.obstacleBike} />
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={`obstacle-${index}`} style={[styles.obstacleBar, { top: 26 + index * 22 }]} />
          ))}
        </>
      );
    case 'bike-04':
      return (
        <>
          <View style={styles.bumpRoad}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={`bump-${index}`} style={styles.bump} />
            ))}
          </View>
          <VehicleToken type="bike" tint={accent} style={styles.bumpBike} />
        </>
      );
    default:
      return (
        <View style={styles.centeredHint}>
          <MaterialCommunityIcons name="motorbike" size={34} color={accent} />
          <Text style={styles.fallbackText}>Minh họa sa hình</Text>
        </View>
      );
  }
}

export default function PracticalLessonIllustration({ section, lesson }) {
  return (
    <View style={[styles.frame, { borderColor: `${section.accent}24`, backgroundColor: `${section.accent}08` }]}>
      <View style={styles.frameHeader}>
        <Text style={[styles.frameLabel, { color: section.accent }]}>Minh họa nhanh</Text>
        <MaterialCommunityIcons name={section.icon} size={16} color={section.accent} />
      </View>
      <View style={styles.canvas}>
        {section.id === 'motorbike'
          ? renderBikeLesson(lesson.id, section.accent)
          : renderCarLesson(lesson.id, section.accent)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  frameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  frameLabel: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  canvas: {
    height: 156,
    margin: spacing.md,
    borderRadius: radii.md,
    backgroundColor: '#eef3f8',
    overflow: 'hidden',
    position: 'relative',
  },
  vehicleToken: {
    position: 'absolute',
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0f172a',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  road: {
    position: 'absolute',
    backgroundColor: '#1f2937',
    borderRadius: 18,
  },
  horizontalRoad: {
    left: 14,
    right: 14,
    top: 58,
    height: 40,
  },
  crossRoad: {
    width: 42,
    top: 14,
    bottom: 14,
    left: '50%',
    marginLeft: -21,
  },
  verticalRoad: {
    width: 40,
    left: 26,
    top: 16,
    bottom: 24,
  },
  cornerRoad: {
    left: 26,
    right: 24,
    bottom: 24,
    height: 40,
  },
  centerDash: {
    position: 'absolute',
    left: 18,
    right: 18,
    top: 17,
  },
  cornerDash: {
    position: 'absolute',
    left: 48,
    right: 18,
    top: 17,
  },
  crossDash: {
    position: 'absolute',
    left: 18,
    top: 14,
    bottom: 14,
  },
  verticalDash: {
    position: 'absolute',
    top: 18,
    bottom: 18,
    left: 17,
  },
  dashRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashColumn: {
    justifyContent: 'space-between',
  },
  dashSegment: {
    width: 14,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#e2e8f0',
  },
  dashSegmentVertical: {
    width: 4,
    height: 12,
    borderRadius: 999,
    backgroundColor: '#e2e8f0',
  },
  startLine: {
    position: 'absolute',
    top: 54,
    left: 54,
    width: 4,
    height: 48,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  startCar: {
    left: 18,
    top: 57,
  },
  cornerBadge: {
    position: 'absolute',
    right: 14,
    top: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.text,
  },
  crosswalk: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 4,
  },
  crosswalkCenter: {
    left: '50%',
    marginLeft: -28,
    top: 63,
  },
  crosswalkStripe: {
    width: 7,
    height: 30,
    borderRadius: 3,
    backgroundColor: colors.surface,
  },
  approachCar: {
    left: 18,
    top: 57,
  },
  walkWrap: {
    position: 'absolute',
    right: 24,
    top: 42,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hillRoad: {
    position: 'absolute',
    left: 18,
    bottom: 42,
    width: 176,
    height: 26,
    borderRadius: 16,
    backgroundColor: '#1f2937',
    transform: [{ rotate: '-18deg' }],
  },
  hillRoadEdge: {
    position: 'absolute',
    left: 22,
    bottom: 73,
    width: 164,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#e2e8f0',
    transform: [{ rotate: '-18deg' }],
  },
  hillCar: {
    left: 82,
    top: 58,
  },
  stopMarker: {
    position: 'absolute',
    left: 22,
    bottom: 44,
    backgroundColor: '#fee2e2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  stopMarkerText: {
    fontSize: 11,
    fontWeight: '900',
    color: colors.danger,
  },
  cornerCar: {
    left: 44,
    top: 92,
  },
  wheelTrack: {
    position: 'absolute',
    left: 94,
    top: 92,
    width: 68,
    height: 6,
    borderRadius: 999,
    backgroundColor: '#94a3b8',
  },
  wheelTrackSecond: {
    top: 106,
  },
  trafficLight: {
    width: 28,
    height: 74,
    borderRadius: 16,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
  },
  trafficLightPos: {
    position: 'absolute',
    right: 24,
    top: 20,
  },
  lightDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  intersectionCar: {
    left: 28,
    top: 89,
  },
  curveOne: {
    position: 'absolute',
    left: -12,
    top: 76,
    width: 150,
    height: 48,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#1f2937',
    transform: [{ rotate: '-10deg' }],
  },
  curveTwo: {
    position: 'absolute',
    right: -10,
    top: 34,
    width: 148,
    height: 48,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#1f2937',
    transform: [{ rotate: '10deg' }],
  },
  curveThree: {
    position: 'absolute',
    left: 70,
    top: 56,
    width: 68,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1f2937',
  },
  curveArrowOne: {
    position: 'absolute',
    left: 36,
    top: 24,
  },
  curveArrowTwo: {
    position: 'absolute',
    right: 36,
    bottom: 24,
  },
  curveCar: {
    left: 100,
    top: 86,
  },
  parkingRoadVertical: {
    width: 48,
    left: 20,
    top: 16,
    bottom: 16,
  },
  parallelBox: {
    top: 26,
    left: 96,
    width: 88,
    height: 88,
  },
  parallelCar: {
    left: 98,
    top: 76,
  },
  parallelArrow: {
    position: 'absolute',
    left: 72,
    top: 66,
  },
  parkingRoadBottom: {
    left: 16,
    right: 16,
    bottom: 18,
    height: 42,
  },
  parkingBottomDash: {
    position: 'absolute',
    left: 18,
    right: 18,
    top: 18,
  },
  reverseBox: {
    left: 54,
    top: 18,
    width: 112,
    height: 66,
  },
  reverseCar: {
    left: 36,
    top: 88,
  },
  reverseArrow: {
    position: 'absolute',
    left: 84,
    top: 86,
  },
  parkingBox: {
    position: 'absolute',
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#94a3b8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.55)',
  },
  parkingBoxHorizontal: {
    height: 64,
  },
  parkingText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#64748b',
  },
  railTrackWrap: {
    position: 'absolute',
    left: 88,
    top: 26,
    width: 120,
    height: 48,
    transform: [{ rotate: '90deg' }],
  },
  railLine: {
    position: 'absolute',
    top: 12,
    bottom: 12,
    width: 4,
    borderRadius: 999,
    backgroundColor: '#64748b',
  },
  railLineLeft: {
    left: 6,
  },
  railLineRight: {
    right: 6,
  },
  railSleeper: {
    position: 'absolute',
    top: 18,
    width: 10,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#94a3b8',
  },
  railTrackPos: {
    right: -20,
    top: 28,
  },
  railCar: {
    left: 18,
    top: 56,
  },
  trainIcon: {
    position: 'absolute',
    right: 18,
    top: 18,
  },
  speedCar: {
    left: 26,
    top: 56,
  },
  speedBadge: {
    position: 'absolute',
    minWidth: 44,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  speedBadgeLeft: {
    left: 92,
    top: 18,
  },
  speedBadgeRight: {
    right: 24,
    top: 18,
  },
  speedText: {
    fontSize: 12,
    fontWeight: '900',
    color: colors.text,
  },
  speedArrow: {
    position: 'absolute',
    left: 98,
    top: 68,
  },
  finishCar: {
    left: 34,
    top: 56,
  },
  finishLine: {
    position: 'absolute',
    right: 62,
    top: 52,
    width: 6,
    height: 52,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  finishFlag: {
    position: 'absolute',
    right: 24,
    top: 54,
  },
  figureEightLeft: {
    position: 'absolute',
    left: 28,
    top: 28,
    width: 70,
    height: 98,
    borderWidth: 8,
    borderColor: '#1f2937',
    borderRadius: 38,
    backgroundColor: 'transparent',
  },
  figureEightRight: {
    position: 'absolute',
    right: 28,
    top: 28,
    width: 70,
    height: 98,
    borderWidth: 8,
    borderColor: '#1f2937',
    borderRadius: 38,
    backgroundColor: 'transparent',
  },
  figureEightBike: {
    left: '50%',
    marginLeft: -21,
    top: 58,
  },
  straightLaneLeft: {
    position: 'absolute',
    left: 72,
    top: 14,
    bottom: 14,
    width: 6,
    borderRadius: 999,
    backgroundColor: '#1f2937',
  },
  straightLaneRight: {
    position: 'absolute',
    right: 72,
    top: 14,
    bottom: 14,
    width: 6,
    borderRadius: 999,
    backgroundColor: '#1f2937',
  },
  straightCenterDash: {
    position: 'absolute',
    left: '50%',
    marginLeft: -2,
    top: 18,
    bottom: 18,
  },
  straightBike: {
    left: '50%',
    marginLeft: -21,
    top: 58,
  },
  obstacleBike: {
    left: '50%',
    marginLeft: -21,
    top: 92,
  },
  obstacleBar: {
    position: 'absolute',
    left: 92,
    right: 92,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#f59e0b',
  },
  bumpRoad: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 36,
    height: 46,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bump: {
    width: 24,
    height: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#1f2937',
  },
  bumpBike: {
    left: '50%',
    marginLeft: -21,
    top: 44,
  },
  centeredHint: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  fallbackText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
  },
});