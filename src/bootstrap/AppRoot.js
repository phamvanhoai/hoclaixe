import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppProvider from '../context/AppContext';
import AppNavigator from '../navigation/AppNavigator';

export default function AppRoot() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
