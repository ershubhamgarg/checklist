import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  Pressable,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnContainer}
          onPress={onLoginPress}>
          <ListText medium style={styles.txt}>
            Go to checklist
          </ListText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
