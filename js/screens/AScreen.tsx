import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { Logger } from '@utils/logger';
import { fonts } from '@styles/fonts';

export const AScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fonts.Rubik400Regular, fontSize: 24 }}>
        A Screen
      </Text>
      <Button
        title="Go to B"
        onPress={() => {
          Logger.get('AScreen').info('Going to B');
          navigation.navigate('B');
        }}
      />
    </View>
  );
};
