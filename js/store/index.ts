import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

//
export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isOnboardingCompleted: false, testCount: 0 },
  reducers: {
    markOnboardingAsCompleted: state => {
      console.log({ from: 'markOnboardingAsCompleted' });
      state.isOnboardingCompleted = true;
    },
    randomizeTestCount: state => {
      state.testCount = Math.floor(Math.random() * 100);
    },
  },
});

//
const persistConfig = { key: 'root', storage: AsyncStorage };
const persistedReducer = persistReducer(persistConfig, appStateSlice.reducer);

//
export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

//
export const persistor = persistStore(store);
