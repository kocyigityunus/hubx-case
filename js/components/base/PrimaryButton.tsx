import { colors, fonts } from '@styles';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const PrimaryButton = ({
  onPress,
  style,
  title,
  children,
  ...rest
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  title: string;
}) => {
  //
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.8 : 1 }, style]}
      onPress={onPress}
      {...rest}
    >
      {children ? children : <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green400,
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.SFProText,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
});
