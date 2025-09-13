import { Logger } from '@/utils/logger';
import { useNavigation } from '@react-navigation/native';
import { Image, Animated, Text, View, LayoutAnimation } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList, ScreenNames } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingGradient } from '@components/other/OnboardingGradient';
import PagerView from 'react-native-pager-view';
import { StyleSheet } from 'react-native-unistyles';
import { colors, fonts } from '@styles';
import { PrimaryButton } from '@components/base/PrimaryButton';
import { PageIndicator } from 'react-native-page-indicator';
import FastImage from '@d11/react-native-fast-image';
import React from 'react';

const Title0 = () => {
  return (
    <View style={{ minHeight: 70 }}>
      <Text style={styles.title}>
        Take a photo to <Text style={styles.titleHighlight}>identify</Text>
        {'\n'} the plant!
      </Text>
      <Image
        style={{ position: 'absolute', right: 47, top: 38, width: 136, height: 13 }}
        source={require('@assets/images/brush.png')}
      />
    </View>
  );
};

const Title1 = () => {
  return (
    <View style={{ minHeight: 70 }}>
      <Text style={styles.title}>
        Get plant <Text style={styles.titleHighlight}>care guides</Text>
      </Text>
      <Image
        style={{ position: 'absolute', right: 100, top: 41, width: 152, height: 13 }}
        source={require('@assets/images/brush.png')}
      />
    </View>
  );
};

//
type ScreenName = typeof ScreenNames.Onboarding.OnboardingCarousel;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const OnboardingCarouselScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('OnboardingCarouselScreen').info('line21.insets', { insets });

  //
  const [currentPage, setCurrentPage] = React.useState(0);

  //
  return (
    <OnboardingGradient>
      <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View style={{ marginTop: 12 }}>
          {currentPage === 0 && <Title0 />}
          {currentPage === 1 && <Title1 />}
          {currentPage === 2 && <Title0 />}
        </View>

        {/* Pager View and Bottom Part Holder */}
        <View style={{ flex: 1 }}>
          <PagerView
            style={styles.pagerView}
            initialPage={0}
            onPageSelected={e => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setCurrentPage(e.nativeEvent.position);
            }}
          >
            <View style={[styles.page, {}]} key="0">
              <FastImage
                style={{ width: '100%', height: '100%' }}
                source={require('@assets/images/onboarding_carousel0.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={[styles.page, {}]} key="1">
              <FastImage
                style={{ width: '100%', height: '100%' }}
                source={require('@assets/images/onboarding_carousel1.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={[styles.page, {}]} key="2">
              <FastImage
                style={{ width: '100%', height: '100%' }}
                source={require('@assets/images/onboarding_carousel0.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </PagerView>
          <View style={{ position: 'absolute', bottom: 12, left: 0, right: 0, height: 100 }}>
            <PrimaryButton
              style={{ marginHorizontal: 24 }}
              title="Continue"
              onPress={() => {
                Logger.get('GetStartedScreen').info('Going to Paywall');
                navigation.push(ScreenNames.Other.Paywall);
              }}
            />

            <PageIndicator
              count={3}
              current={currentPage}
              style={{ marginTop: 32 }}
              variant="beads"
              color="#13231B40"
              activeColor={colors.dark900}
            />
          </View>
        </View>
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
