import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, StatusBar } from 'react-native';
import { Logger } from '@utils/logger';
import { fonts, colors } from '@styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from '@d11/react-native-fast-image';
import { RootStackParamList, ScreenNames } from '@/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native-unistyles';
import { useCallback } from 'react';
import { OnboardingGradient } from '@components/other/OnboardingGradient';
import { PrimaryButton } from '@/components/base/PrimaryButton';

//
type ScreenName = typeof ScreenNames.Onboarding.GetStarted;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const GetStartedScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('GetStartedScreen').info({ insets });

  //
  const openTermsOfUse = useCallback(() => {
    navigation.push(ScreenNames.Other.WebView, {
      url: 'https://novaapp.ai/terms',
    });
  }, [navigation]);

  //
  const openPrivacyPolicy = useCallback(() => {
    navigation.push(ScreenNames.Other.WebView, {
      url: 'https://novaapp.ai/privacy',
    });
  }, [navigation]);

  return (
    <OnboardingGradient>
      <StatusBar barStyle={'dark-content'} />
      {/* Holder */}
      <View
        style={{
          position: 'absolute',
          inset: 0,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        {/* Title and Subtitle */}
        <Text style={styles.title}>
          Welcome to <Text style={{ fontFamily: fonts.Rubik600SemiBold }}>PlantApp</Text>
        </Text>
        <Text style={styles.subTitle}>Identify more than 3000+ plants and {'\n'}88% accuracy.</Text>

        <FastImage
          style={{
            width: '100%',
            flex: 1,
            marginTop: 24,
          }}
          resizeMode={FastImage.resizeMode.contain}
          source={require('@assets/images/onboarding_0.png')}
        />

        {/* Get Started Button */}
        <PrimaryButton
          style={{ marginHorizontal: 24, marginTop: 12 }}
          title="Get Started"
          onPress={() => {
            Logger.get('GetStartedScreen').info('Going to OnboardingCarousel');
            navigation.navigate(ScreenNames.Onboarding.OnboardingCarousel);
          }}
        />

        {/* Bottom Info Text */}
        <Text style={styles.bottomInfoText}>
          By tapping next, you are agreeing to PlantID{' \n'}
          <Text style={styles.bottomInfoTextLink} onPress={openTermsOfUse}>
            Terms of Use
          </Text>{' '}
          &{' '}
          <Text style={styles.bottomInfoTextLink} onPress={openPrivacyPolicy}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </OnboardingGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.dark900,
    fontFamily: fonts.Rubik400Regular,
    fontSize: 28,
    lineHeight: 28,
    letterSpacing: 0.07,
    marginTop: 12,
    marginLeft: 24,
  },
  subTitle: {
    marginLeft: 24,
    marginTop: 8,
    fontFamily: fonts.Rubik400Regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.07,
    color: colors.dark900,
    opacity: 0.7,
  },
  bottomInfoText: {
    textAlign: 'center',
    fontFamily: fonts.Rubik400Regular,
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    color: colors.dark500,
    opacity: 0.7,
    marginTop: 17,
    marginHorizontal: 32,
    marginBottom: 8,
  },
  bottomInfoTextLink: {
    textDecorationLine: 'underline',
  },
});
