import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import { colors, radii, shadows, spacing } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import { PRACTICAL_GUIDE_SECTIONS } from '../data/practicalGuides';

const CAR_LICENSE_IDS = ['b', 'c1', 'c', 'd1'];
const BIKE_LICENSE_IDS = ['a1', 'a'];

function getRecommendedSectionId(licenseId) {
  if (BIKE_LICENSE_IDS.includes(licenseId)) {
    return 'motorbike';
  }

  if (CAR_LICENSE_IDS.includes(licenseId)) {
    return 'car';
  }

  return 'car';
}

function renderBulletList(items, textStyle) {
  return items.map((item) => (
    <View key={item} style={styles.bulletRow}>
      <View style={styles.bulletDot} />
      <Text style={textStyle}>{item}</Text>
    </View>
  ));
}

export default function PracticalGuideScreen({ navigation }) {
  const { selectedLicense } = useAppContext();
  const recommendedSectionId = getRecommendedSectionId(selectedLicense.id);
  const sections = [...PRACTICAL_GUIDE_SECTIONS].sort((left, right) => {
    if (left.id === recommendedSectionId) {
      return -1;
    }

    if (right.id === recommendedSectionId) {
      return 1;
    }

    return 0;
  });
  const recommendedSection = sections[0];
  const recommendationLabel = recommendedSection.id === 'car' ? 'Ô tô' : 'Mô tô';

  return (
    <ScreenContainer>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerButton}>
          <MaterialCommunityIcons name="arrow-left" size={22} color={colors.text} />
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.headerTitle}>Hướng dẫn sa hình</Text>
          <Text style={styles.headerSubtitle}>Tổng hợp bài thực hành, mẹo giữ bình tĩnh và lỗi hay mất điểm</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <View style={styles.heroTopRow}>
          <View style={[styles.heroIconWrap, { backgroundColor: `${recommendedSection.accent}18` }]}>
            <MaterialCommunityIcons name={recommendedSection.icon} size={28} color={recommendedSection.accent} />
          </View>
          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>Gợi ý theo hạng đang học</Text>
            <Text style={styles.heroTitle}>{recommendationLabel} • Hạng {selectedLicense.code}</Text>
            <Text style={styles.heroBody}>{recommendedSection.subtitle}</Text>
          </View>
        </View>

        <View style={styles.metricRow}>
          {recommendedSection.metrics.map((metric) => (
            <View key={`${recommendedSection.id}-${metric.label}`} style={styles.metricCard}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {sections.map((section) => {
        const isRecommended = section.id === recommendedSectionId;

        return (
          <View key={section.id} style={styles.sectionWrap}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIconWrap, { backgroundColor: `${section.accent}18` }]}>
                <MaterialCommunityIcons name={section.icon} size={24} color={section.accent} />
              </View>
              <View style={styles.sectionCopy}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
              </View>
              {isRecommended ? (
                <View style={[styles.sectionBadge, { backgroundColor: `${section.accent}14` }]}>
                  <Text style={[styles.sectionBadgeText, { color: section.accent }]}>Phù hợp nhất</Text>
                </View>
              ) : null}
            </View>

            <View style={styles.noteCard}>
              {renderBulletList(section.notes, styles.noteText)}
            </View>

            {section.lessons.map((lesson) => (
              <View key={lesson.id} style={styles.lessonCard}>
                <View style={styles.lessonHeader}>
                  <View style={[styles.sequenceBadge, { backgroundColor: `${section.accent}16` }]}>
                    <Text style={[styles.sequenceText, { color: section.accent }]}>{lesson.sequence}</Text>
                  </View>
                  <View style={styles.lessonCopy}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonGoal}>{lesson.goal}</Text>
                  </View>
                </View>

                {lesson.note ? (
                  <View style={styles.lessonNoteWrap}>
                    <MaterialCommunityIcons name="information-outline" size={16} color={colors.info} />
                    <Text style={styles.lessonNote}>{lesson.note}</Text>
                  </View>
                ) : null}

                <View style={styles.blockWrap}>
                  <Text style={styles.blockTitle}>Cách làm</Text>
                  {renderBulletList(lesson.steps, styles.blockText)}
                </View>

                <View style={styles.blockWrap}>
                  <Text style={styles.blockTitle}>Mẹo nhớ nhanh</Text>
                  {renderBulletList(lesson.tips, styles.blockText)}
                </View>

                <View style={styles.blockWrap}>
                  <Text style={[styles.blockTitle, { color: colors.danger }]}>Hay mất điểm</Text>
                  {renderBulletList(lesson.commonMistakes, styles.blockText)}
                </View>
              </View>
            ))}
          </View>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCopy: {
    flex: 1,
    gap: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  heroCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  heroIconWrap: {
    width: 54,
    height: 54,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCopy: {
    flex: 1,
    gap: 4,
  },
  heroEyebrow: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: colors.textSoft,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.text,
  },
  heroBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  metricRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  metricCard: {
    flexGrow: 1,
    minWidth: '30%',
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.md,
    padding: spacing.md,
    gap: 6,
  },
  metricValue: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.text,
  },
  metricLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
  },
  sectionWrap: {
    gap: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  sectionIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCopy: {
    flex: 1,
    gap: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
  sectionBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
  },
  sectionBadgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  noteCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  lessonCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.md,
    ...shadows.card,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  sequenceBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sequenceText: {
    fontSize: 14,
    fontWeight: '900',
  },
  lessonCopy: {
    flex: 1,
    gap: 4,
  },
  lessonTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: colors.text,
  },
  lessonGoal: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  lessonNoteWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.xs,
    backgroundColor: '#ecfeff',
    borderRadius: radii.md,
    padding: spacing.md,
  },
  lessonNote: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: colors.text,
  },
  blockWrap: {
    gap: spacing.sm,
  },
  blockTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.text,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 7,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  blockText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
});