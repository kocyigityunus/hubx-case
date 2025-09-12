import { Logger } from '@/utils/logger';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList, ScreenNames } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingGradient } from '@components/other/OnboardingGradient';
import PagerView from 'react-native-pager-view';
import { StyleSheet } from 'react-native-unistyles';
import { colors, fonts } from '@styles';
import { useLayout } from '@react-native-community/hooks';
import { useLayoutEffect, useRef } from 'react';
import { PrimaryButton } from '@components/base/PrimaryButton';

//
type ScreenName = typeof ScreenNames.Onboarding.OnboardingCarousel;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const OnboardingCarouselScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('OnboardingCarouselScreen').info('line21.insets', { insets });

  return (
    <OnboardingGradient>
      <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View>
          <Text style={styles.title}>
            Take a photo to <Text style={styles.titleHighlight}>identify</Text>
            {'\n'} the plant!
          </Text>
          <Image
            style={{ position: 'absolute', right: 47, top: 47, width: 136, height: 13 }}
            source={require('@assets/images/brush.png')}
          />
        </View>

        <PagerView style={styles.pagerView} initialPage={0}>
          <View style={[styles.page, { backgroundColor: 'red' }]} key="1">
            <Text>First page</Text>
          </View>
          <View style={[styles.page, { backgroundColor: 'blue' }]} key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>

        <PrimaryButton
          style={{ marginHorizontal: 24, marginTop: 12 }}
          title="Continue"
          onPress={() => {
            Logger.get('GetStartedScreen').info('Going to OnboardingCarousel');
            navigation.push(ScreenNames.Onboarding.OnboardingCarousel);
          }}
        />
      </View>
    </OnboardingGradient>
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
    marginTop: 12,
  },
  titleHighlight: {
    fontFamily: fonts.Rubik800ExtraBold,
  },
  pagerView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  page: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
