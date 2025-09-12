import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AScreen } from './AScreen';
import { BScreen } from './BScreen';

//
const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="A">
      <Stack.Screen name="A" component={AScreen} />
      <Stack.Screen name="B" component={BScreen} />
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
