import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

export function Login() {
  const navigation = useNavigation();
  const onLoginPress = () => {
    navigation.navigate('Checklists');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable style={styles.btnContainer} onPress={onLoginPress}>
          <Text style={styles.txt}>Login to checklist</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
