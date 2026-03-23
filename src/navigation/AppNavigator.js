import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../constants/theme';
import { useAppContext } from '../context/AppContext';
import HomeScreen from '../screens/HomeScreen';
import StudyScreen from '../screens/StudyScreen';
import TestsScreen from '../screens/TestsScreen';
import SignsScreen from '../screens/SignsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LicenseTypeScreen from '../screens/LicenseTypeScreen';
import QuestionSessionScreen from '../screens/QuestionSessionScreen';
import ResultScreen from '../screens/ResultScreen';
import MistakesScreen from '../screens/MistakesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
    notification: colors.danger,
  },
};

function getTabIcon(routeName, focused) {
  if (routeName === 'Home') {
    return focused ? 'view-dashboard' : 'view-dashboard-outline';
  }
  if (routeName === 'Study') {
    return focused ? 'book-open-page-variant' : 'book-open-page-variant-outline';
  }
  if (routeName === 'Tests') {
    return focused ? 'clipboard-check' : 'clipboard-check-outline';
  }
  if (routeName === 'Signs') {
    return focused ? 'sign-direction' : 'sign-direction';
  }
  return focused ? 'account-circle' : 'account-circle-outline';
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSoft,
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name={getTabIcon(route.name, focused)} size={22} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chu' }} />
      <Tab.Screen name="Study" component={StudyScreen} options={{ title: 'Hoc' }} />
      <Tab.Screen name="Tests" component={TestsScreen} options={{ title: 'Thi thu' }} />
      <Tab.Screen name="Signs" component={SignsScreen} options={{ title: 'Bien bao' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Ho so' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { state } = useAppContext();

  if (!state.hasHydrated) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Dang tai du lieu hoc tap...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="LicenseTypes" component={LicenseTypeScreen} />
        <Stack.Screen name="QuestionSession" component={QuestionSessionScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Mistakes" component={MistakesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
});
