import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, SafeAreaView, TextInput, View} from 'react-native';
import {styles} from './styles';
import Header from '../../components/AppHeader';
import ListText from '../../components/ListText';
import {BlurView} from '@react-native-community/blur';
import {} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import Icon from '../../components/Icon';
export function AddList() {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  const onBack = () => {
    navigation.goBack();
  };

  const onPressCross = () => {
    setText('');
  };

  const onChangeText = e => {
    setText(e);
  };
  return (
    <BlurView
      blurAmount={0.2}
      reducedTransparencyFallbackColor="white"
      // blurRadius={1}
      style={styles.container}>
      <Header
        backButtonBackgroundStyle={styles.backButton}
        onBackPress={onBack}></Header>
      <View style={styles.inputOuter}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="Insert list’s title"
            placeholderTextColor={COLORS.MARLOW_GREY}
            style={styles.input}></TextInput>
          {text && (
            <Pressable onPress={onPressCross}>
              <Icon name={'cross'} />
            </Pressable>
          )}
        </View>
      </View>
    </BlurView>
  );
}
