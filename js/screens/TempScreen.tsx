import { fonts } from '@/styles';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export type TempScreenParamList = { text: string | undefined };
export const TempScreen = ({ route }: { route: any }) => {
  //
  const navigation = useNavigation();
  const text = route?.params?.text ?? 'Temp Screen';

  useEffect(() => {
    // navigation.setOptions({
    //   title: 'B Screen 12123',
    // });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fonts.Rubik400Regular, fontSize: 20 }}>{text}</Text>
    </View>
  );
};
