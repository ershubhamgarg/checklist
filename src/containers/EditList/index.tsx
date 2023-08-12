import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Keyboard, Pressable, SafeAreaView, View} from 'react-native';

import {} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/AppHeader';
import ListText from '../../components/ListText';
import MyListItem from '../../components/MyListItem';
import json from './../../json/myList.json';
import {styles} from './styles';
import {saveItemToList} from '../../store/reducers/mychecklistreducer';
export function EditList(props) {
  const {route} = props;
  const {params} = route;
  const {listData} = params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState('');
  const {myList} = useSelector(state => state.mychecklistreducer);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let arr = myList.filter((item: any) => item.listId === listData.listId)[0]
      .items;
    if (arr?.length) {
      setData(arr);
    } else {
      onEdit();
    }
  }, [listData, myList]);

  const onBack = () => {
    navigation.goBack();
  };

  const onEdit = () => {
    let editObj = {input: true};
    let arr = data ? data.slice() : [];
    arr.push(editObj);
    setData(arr);
    setEditing(true);
  };

  const onSave = () => {
    if (text.length) {
      let newItemObj = {
        title: text,
        listId: listData.listId,
        itemId: Date.now().toString(),
      };
      console.log('new item : ', newItemObj);
      dispatch(saveItemToList(newItemObj));
    } else {
      let arr = data;
      arr.pop();
      setData(arr);
    }
    setEditing(false);
  };

  const onChange = e => {
    setText(e);
  };

  const renderItem = ({item, index}) =>
    item?.input ? (
      <MyListItem
        index={index}
        input={true}
        item={item}
        onCardPress={() => {}}
        onChange={onChange}
      />
    ) : (
      <MyListItem
        text={text}
        index={index}
        item={item}
        onCardPress={() => {}}
      />
    );

  return (
    <SafeAreaView
      // blurRadius={1}
      style={styles.container}>
      <Header backLabel="Lists" onBackPress={onBack}>
        {editing ? (
          <Pressable onPress={onSave} style={styles.done}>
            <ListText bold style={styles.doneText}>
              Save
            </ListText>
          </Pressable>
        ) : (
          <Pressable onPress={onEdit} style={styles.edit}>
            <ListText bold style={styles.editText}>
              Edit List
            </ListText>
          </Pressable>
        )}
      </Header>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <ListText bold style={{fontSize: 18}}>
            {listData.title}
          </ListText>
        </View>
        <View style={{flex: 1}}>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
    </SafeAreaView>
  );
}
