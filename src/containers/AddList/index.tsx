import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/AppHeader';
import Icon from '../../components/Icon';
import ListText from '../../components/ListText';
import {COLORS} from '../../constants/colors';
import {addNewList} from '../../store/reducers/mychecklistreducer';
import {styles} from './styles';
export function AddList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const onBack = () => {
    navigation.goBack();
  };

  const onPressCross = () => {};

  const onChangeText = e => {
    setText(e);
  };

  const onDone = () => {
    let newListObj = {
      title: text,
      listId: Date.now().toString(),
      personal: true,
      createdOn: Date.now(),
      items: [],
    };

    dispatch(addNewList(newListObj));
    navigation.replace('EditList', {listData: newListObj});
  };
  return (
    <BlurView
      blurAmount={0.2}
      reducedTransparencyFallbackColor="white"
      // blurRadius={1}
      style={styles.container}>
      <Header
        backButtonBackgroundStyle={styles.backButton}
        onBackPress={onBack}>
        {text && (
          <Pressable onPress={onDone} style={styles.done}>
            <ListText bold style={styles.doneText}>
              Done
            </ListText>
          </Pressable>
        )}
      </Header>
      <View style={styles.inputOuter}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="Insert list’s title"
            placeholderTextColor={COLORS.MARLOW_GREY}
            style={styles.input}
          />
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
