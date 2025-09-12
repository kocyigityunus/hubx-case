import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { GetStartedScreen } from '@screens/Onboarding/GetStarted';
import { BScreen } from './BScreen';
import { WebViewScreen, WebViewScreenParamList } from '@screens/WebViewScreen';

//
export const ScreenNames = {
  Onboarding: {
    GetStarted: 'Onboarding.GetStarted',
  },
  Other: {
    WebView: 'Other.WebView',
  },
};

export type RootStackParamList = {
  'Onboarding.GetStarted': undefined;
  'Other.WebView': WebViewScreenParamList;
  B: undefined;
};

//
const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding.GetStarted">
      <Stack.Screen
        name={'Onboarding.GetStarted'}
        component={GetStartedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="B" component={BScreen} />
      <Stack.Screen
        name={'Other.WebView'}
        component={WebViewScreen}
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
