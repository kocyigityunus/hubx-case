import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AScreen } from './AScreen';
import { BScreen } from './BScreen';
import { WebViewScreen } from '@screens/WebViewScreen';

//
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="A">
      <Stack.Screen
        name="A"
        component={AScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="B" component={BScreen} />
      <Stack.Screen
        name="Other.WebView"
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
