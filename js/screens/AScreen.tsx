import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, StyleSheet, Linking } from 'react-native';
import { Logger } from '@utils/logger';
import { fonts } from '@styles/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from '@d11/react-native-fast-image';

export const AScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  Logger.get('AScreen').info({ insets });

  return (
    <LinearGradient
      colors={['#F8FAFD', '#EDF7FE']}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.3 }}
      style={{ flex: 1, width: '100%' }}
    >
      <View
        style={{
          position: 'absolute',
          inset: 0,
          paddingTop: insets.top,
        }}
      >
        <Text
          style={{
            color: '#13231B',
            fontFamily: fonts.Rubik400Regular,
            fontSize: 28,
            lineHeight: 28,
            letterSpacing: 0.07,
            marginTop: 12,
            marginLeft: 24,
          }}
        >
          Welcome to{' '}
          <Text style={{ fontFamily: fonts.Rubik600SemiBold }}>PlantApp</Text>
        </Text>

        <Text
          style={{
            marginLeft: 24,
            marginTop: 8,
            fontFamily: fonts.Rubik400Regular,
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.07,
            color: '#13231B',
            opacity: 0.7,
          }}
        >
          Identify more than 3000+ plants and 88% accuracy.
        </Text>

        <FastImage
          style={{
            width: '100%',
            height: 499,
          }}
          resizeMode={FastImage.resizeMode.contain}
          source={require('@assets/images/onboarding_0.png')}
        />

        <Pressable
          style={{
            backgroundColor: '#28AF6E',
            borderRadius: 12,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 24,
            marginTop: 24,
          }}
          onPress={() => {
            Logger.get('AScreen').info('Going to B');
            navigation.navigate('B');
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontFamily: 'SF Pro Text',
              fontWeight: 'bold',
              fontSize: 15,
              lineHeight: 24,
              letterSpacing: -0.24,
              textAlign: 'center',
            }}
          >
            Get Started
          </Text>
        </Pressable>

        <Text
          style={{
            textAlign: 'center',
            fontFamily: fonts.Rubik400Regular,
            fontSize: 11,
            lineHeight: 15,
            letterSpacing: 0.07,
            color: '#597165',
            opacity: 0.7,
            marginTop: 24,
            marginHorizontal: 32,
          }}
        >
          By tapping next, you are agreeing to PlantID{' '}
          <Text
            style={styles.bottomInfoTextLink}
            onPress={async () => {
              const url = 'https://plantid.com/terms-of-use';
              const supported = await Linking.canOpenURL(url);
              Logger.get('AScreen').info({ supported });

              if (supported) {
                await Linking.openURL(url);
              }
            }}
          >
            Terms of Use
          </Text>{' '}
          & <Text style={styles.bottomInfoTextLink}>Privacy Policy</Text>.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bottomInfoTextLink: {
    textDecorationLine: 'underline',
  },
});
