/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { Navigation, ScreenNames } from './js/navigation';
import { store, persistor, RootState } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

console.log({ from: 'App.tsx' });
console.log({ store });

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log({ from: 'AppContent' });
  console.log({ store });

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const isOnboardingCompleted = useSelector((state: RootState) => state.isOnboardingCompleted);
  console.log({ isOnboardingCompleted });

  return (
    <View style={{ flex: 1 }}>
      <Navigation
        initialRouteName={
          isOnboardingCompleted ? ScreenNames.Main.Home : ScreenNames.Onboarding.GetStarted
        }
      />
    </View>
  );
}

export default App;
