/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { MainNavigation, ScreenNames } from './js/navigation';
import { store, persistor, RootState } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

//
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppContent />
          </QueryClientProvider>
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
      <MainNavigation
        initialRouteName={
          isOnboardingCompleted ? ScreenNames.Other.Main : ScreenNames.Onboarding.GetStarted
        }
      />
    </View>
  );
}

export default App;
