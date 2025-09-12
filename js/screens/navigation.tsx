import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { GetStartedScreen } from '@screens/Onboarding/GetStarted';
import { BScreen } from './BScreen';
import { WebViewScreen } from '@screens/WebViewScreen';

//
export const ScreenNames = {
  Onboarding: {
    GetStarted: 'Onboarding.GetStarted',
  },
  Other: {
    WebView: 'Other.WebView',
  },
};

//
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding.GetStarted">
      <Stack.Screen
        name={ScreenNames.Onboarding.GetStarted}
        component={GetStartedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="B" component={BScreen} />
      <Stack.Screen
        name={ScreenNames.Other.WebView}
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
