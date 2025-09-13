import { colors, fonts } from '@/styles';
import { BlurView } from '@react-native-community/blur';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const RadioButton = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <View
      style={[
        {
          width: 24,
          height: 24,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
        },
        {
          backgroundColor: isSelected ? colors.green400 : '#FFFFFF14',
        },
      ]}
    >
      {isSelected && (
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'white' }} />
      )}
    </View>
  );
};

type PackProps = {
  isSelected: boolean;
  title: string;
  subTitle: string;
  promoText?: string | undefined;
  onSelect: () => void;
};

export const Pack = ({ isSelected, title, subTitle, promoText, onSelect }: PackProps) => {
  //
  const showPromoText = promoText && promoText.length > 0;

  //
  return (
    <BlurView
      blurAmount={80}
      style={[{ height: 60, width: '100%', overflow: 'hidden', borderRadius: 14 }]}
    >
      <Pressable
        onPress={onSelect}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 18,
          gap: 12,
          position: 'absolute',
          inset: 0,
        }}
      >
        <RadioButton isSelected={isSelected} />
        <View style={{ gap: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </Pressable>
      {showPromoText && (
        <View style={[styles.promoHolder]}>
          <Text style={styles.promoText}>{promoText}</Text>
        </View>
      )}

      {/* Border View */}
      <View
        style={{
          flex: 1,
          borderRadius: 14,
          borderWidth: isSelected ? 1.5 : 0.5,
          borderColor: isSelected ? colors.green400 : '#FFFFFF4D',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.Rubik500Medium,
    fontSize: 16,
    color: colors.white,
  },
  subTitle: {
    fontFamily: fonts.Rubik400Regular,
    fontSize: 12,
    color: colors.white,
    opacity: 0.7,
  },
  promoHolder: {
    height: 26,
    backgroundColor: colors.green400,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 0,
    paddingStart: 12,
    paddingEnd: 9,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  promoText: {
    fontFamily: fonts.Rubik500Medium,
    fontSize: 12,
    lineHeight: 18,
    color: colors.white,
  },
});
