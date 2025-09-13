import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//
import { GetStartedScreen } from '@screens/Onboarding/GetStarted';
import { OnboardingCarouselScreen } from '@/screens/Onboarding/Carousel';

import { BScreen } from './screens/BScreen';

//
import { WebViewScreen, WebViewScreenParamList } from '@/screens/Other/WebViewScreen';
import { PaywallScreen } from '@screens/Other/PaywallScreen';

//
// export type ScreenNames = 'Onboarding.GetStarted' | 'Other.WebView' | 'B';
export const ScreenNames = {
  Onboarding: {
    GetStarted: 'Onboarding.GetStarted',
    OnboardingCarousel: 'Onboarding.OnboardingCarousel',
  },
  Other: {
    WebView: 'Other.WebView',
    Paywall: 'Other.Paywall',
  },
  B: 'B',
} as const;

export type RootStackParamList = {
  [ScreenNames.Onboarding.GetStarted]: undefined;
  [ScreenNames.Onboarding.OnboardingCarousel]: undefined;
  [ScreenNames.Other.WebView]: WebViewScreenParamList;
  [ScreenNames.Other.Paywall]: undefined;
  B: undefined;
};

//
const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding.GetStarted">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.Onboarding.GetStarted} component={GetStartedScreen} />
        <Stack.Screen
          name={ScreenNames.Onboarding.OnboardingCarousel}
          component={OnboardingCarouselScreen}
        />
        <Stack.Screen name={ScreenNames.B} component={BScreen} />
        <Stack.Screen
          name={ScreenNames.Other.WebView}
          component={WebViewScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name={ScreenNames.Other.Paywall}
          component={PaywallScreen}
          options={{ presentation: 'transparentModal', gestureEnabled: false }}
        />
      </Stack.Group>
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
