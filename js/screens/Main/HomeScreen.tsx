import { Logger } from '@/utils/logger';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList, ScreenNames } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native-unistyles';
import { colors, fonts } from '@styles';
import React from 'react';

//
type ScreenName = typeof ScreenNames.Main.Home;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('HomeScreen').info('line21.insets', { insets });

  //
  return (
    <View
      style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}
    >
      <StatusBar barStyle={'dark-content'} />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.Rubik500Medium,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -1,
    marginHorizontal: 24,
    color: colors.dark900,
  },
  titleHighlight: {
    fontFamily: fonts.Rubik800ExtraBold,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
