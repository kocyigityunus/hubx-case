import { Logger } from '@/utils/logger';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList, ScreenNames } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingGradient } from '@components/other/OnboardingGradient';

//
type ScreenName = typeof ScreenNames.Onboarding.OnboardingCarousel;
type NavType = NativeStackNavigationProp<RootStackParamList, ScreenName>;

export const OnboardingCarouselScreen = () => {
  const navigation = useNavigation<NavType>();
  const insets = useSafeAreaInsets();
  Logger.get('OnboardingCarouselScreen').info({ insets });

  return (
    <OnboardingGradient>
      <Text>OnboardingCarousel</Text>
    </OnboardingGradient>
  );
};
