import { colors, fonts } from '@/styles';
import { BlurView } from '@react-native-community/blur';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type FeatureCardProps = { title: string; description: string; iconElement: React.ReactNode };
export const FeatureCard = ({ title, description, iconElement }: FeatureCardProps) => {
  return (
    <BlurView
      style={{ width: 156, height: 130, borderRadius: 14, backgroundColor: '#FFFFFF14' }}
      blurType="dark"
      blurAmount={16}
    >
      <View style={{ padding: 16 }}>
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0000003D',
          }}
        >
          {iconElement}
        </View>
        <Text style={[styles.featureTitle, { marginTop: 16 }]}>{title}</Text>
        <Text style={[styles.featureDescription, { marginTop: 4 }]}>{description}</Text>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  featureTitle: {
    fontFamily: fonts.Rubik500Medium,
    fontSize: 20,
    lineHeight: 24,
    color: colors.white,
    letterSpacing: 0.38,
  },
  featureDescription: {
    fontFamily: fonts.Rubik400Regular,
    fontSize: 13,
    lineHeight: 18,
    color: colors.white,
    opacity: 0.7,
    letterSpacing: -0.8,
  },
});
