/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from './js/screens/navigation';

//

const value = AsyncStorage.getItem('my-key')
  .then(value => {
    console.log({ value });
  })
  .catch(error => {
    console.log({ error });
  });

const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isOnboardingCompleted: false },
  reducers: {
    markOnboardingAsCompleted: (state, action) => {
      console.log({ from: 'markOnboardingAsCompleted' });
      state.isOnboardingCompleted = true;
    },
  },
});

const store = configureStore({
  reducer: appStateSlice.reducer,
});

console.log({ from: 'App.tsx' });
console.log({ store });

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log({ from: 'AppContent' });
  console.log({ store });

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </Provider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const abc = useSelector((state: RootState) => state);
  console.log({ abc });

  return (
    <View style={styles.container}>
      <Navigation />
      {/* <Text style={{ paddingTop: 30 }}>
        {JSON.stringify(store.getState(), null, 2)}
      </Text>
      <Button
        title="Increment"
        onPress={() => {
          store.dispatch(appStateSlice.actions.markOnboardingAsCompleted());
          console.log({ from: 'line 69' });
        }}
      />
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
