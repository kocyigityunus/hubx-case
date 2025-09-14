import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//
import { GetStartedScreen } from '@screens/Onboarding/GetStarted';
import { OnboardingCarouselScreen } from '@/screens/Onboarding/Carousel';
import { TempScreen, TempScreenParamList } from '../screens/TempScreen';
import { WebViewScreen, WebViewScreenParamList } from '@/screens/Other/WebViewScreen';
import { PaywallScreen } from '@screens/Other/PaywallScreen';
import { BoottomTabNavigator } from './bottomTab';

//
export const ScreenNames = {
  Onboarding: {
    GetStarted: 'Onboarding.GetStarted',
    OnboardingCarousel: 'Onboarding.OnboardingCarousel',
  },
  Main: {
    Home: 'Main.Home',
    Diagnose: 'Main.Diagnose',
    Identify: 'Main.Identify',
    MyGarden: 'Main.MyGarden',
    Profile: 'Main.Profile',
  },
  Other: {
    WebView: 'Other.WebView',
    Paywall: 'Other.Paywall',
    Main: 'Other.Main',
  },

  //
  Temp: 'Temp',
} as const;

export type RootStackParamList = {
  [ScreenNames.Onboarding.GetStarted]: undefined;
  [ScreenNames.Onboarding.OnboardingCarousel]: undefined;
  [ScreenNames.Other.WebView]: WebViewScreenParamList;
  [ScreenNames.Other.Paywall]: undefined;
  [ScreenNames.Other.Main]: undefined;
  [ScreenNames.Main.Home]: undefined;
  [ScreenNames.Main.Diagnose]: undefined;
  [ScreenNames.Main.Identify]: undefined;
  [ScreenNames.Main.MyGarden]: undefined;
  [ScreenNames.Main.Profile]: undefined;

  //
  Temp: TempScreenParamList;
};

//
const Stack = createStackNavigator<RootStackParamList>();
const RootStack = ({ initialRouteName }: { initialRouteName: keyof RootStackParamList }) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.Onboarding.GetStarted} component={GetStartedScreen} />
        <Stack.Screen
          name={ScreenNames.Onboarding.OnboardingCarousel}
          component={OnboardingCarouselScreen}
        />
        <Stack.Screen name={ScreenNames.Temp} component={TempScreen} />
        <Stack.Screen
          name={ScreenNames.Other.WebView}
          component={WebViewScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name={ScreenNames.Other.Paywall}
          component={PaywallScreen}
          options={{
            presentation: 'transparentModal',
            gestureEnabled: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen name={ScreenNames.Other.Main} component={BoottomTabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

//
type MainNavigationProps = { initialRouteName: keyof RootStackParamList };
export const MainNavigation = ({ initialRouteName }: MainNavigationProps) => {
  return (
    <NavigationContainer>
      <RootStack initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
};
