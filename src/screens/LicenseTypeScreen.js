import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenContainer from '../components/common/ScreenContainer';
import SectionTitle from '../components/common/SectionTitle';
import { colors, radii, spacing } from '../constants/theme';
import { LICENSE_TYPES } from '../data/licenses';
import { useAppContext } from '../context/AppContext';

function getLicenseIcon(code) {
  if (code.startsWith('A')) {
    return 'motorbike';
  }
  if (code.startsWith('B')) {
    return 'car';
  }
  if (code.startsWith('C')) {
    return 'truck-outline';
  }
  return 'bus';
}

export default function LicenseTypeScreen({ navigation }) {
  const { state, selectLicense } = useAppContext();

  return (
    <ScreenContainer>
      <SectionTitle title="Chon hang bang" subtitle="Lua chon nay duoc luu va duoc dung cho toan bo bo cau hoi, de thi va thong ke" />
      {LICENSE_TYPES.map((item) => {
        const isActive = item.id === state.selectedLicenseId;

        return (
          <Pressable
            key={item.id}
            onPress={() => {
              selectLicense(item.id);
              navigation.goBack();
            }}
            style={[styles.card, isActive && styles.cardActive]}
          >
            <View style={[styles.iconWrap, { backgroundColor: `${item.accent}18` }]}> 
              <MaterialCommunityIcons name={getLicenseIcon(item.code)} size={26} color={item.accent} />
            </View>
            <View style={styles.copy}>
              <Text style={styles.code}>{item.code}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            {isActive ? <MaterialCommunityIcons name="check-circle" size={24} color={item.accent} /> : null}
          </Pressable>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  cardActive: {
    borderColor: colors.primary,
    backgroundColor: '#eef5ff',
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  code: {
    color: colors.primary,
    fontWeight: '900',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
});
