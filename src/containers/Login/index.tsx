import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, SafeAreaView, Image, View} from 'react-native';
import {styles} from './styles';
import ListText from '../../components/ListText';

export function Login() {
  const navigation = useNavigation();
  const onLoginPress = () => {
    navigation.navigate('Checklists');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('./../../assets/images/mn.jpeg')}
          resizeMode="contain"
        />
        <Pressable style={styles.btnContainer} onPress={onLoginPress}>
          <ListText medium style={styles.txt}>
            Login to Marlow checklist
          </ListText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
