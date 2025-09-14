import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export const BScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // navigation.setOptions({
    //   title: 'B Screen 12123',
    // });
    navigation.setOptions({
      headerRight: () => <Button title="Go to A" onPress={() => navigation.navigate('A')} />,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>B Screen</Text>
    </View>
  );
};
