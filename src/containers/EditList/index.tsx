import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Pressable, SafeAreaView, View} from 'react-native';

import {} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/AppHeader';
import ListText from '../../components/ListText';
import MyListItem from '../../components/MyListItem';
import {
  deleteItemFromList,
  doneItemFromList,
  saveItemToList,
} from '../../store/reducers/mychecklistreducer';
import {styles} from './styles';
export function EditList(props: any) {
  const {route} = props;
  const {params} = route;
  const {listData} = params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState('');
  const {myList} = useSelector<any>(state => state.mychecklistreducer);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let arr = myList.filter((item: any) => item.listId === listData.listId)[0]
      .items;

    console.log('Arr', arr);
    if (arr?.length) {
      setData(arr);
    } else {
      setData([{input: true}]);
      setEditing(true);
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

      dispatch(saveItemToList(newItemObj));
      setText('');
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

  const onDone = e => {
    dispatch(doneItemFromList(e));
  };

  const onDelete = e => {
    dispatch(deleteItemFromList(e));
  };

  const renderItem = ({item, index}) => {
    return item?.input ? (
      <MyListItem
        index={index}
        input={true}
        item={item}
        // onCardPress={() => {}}
        onChange={onChange}
      />
    ) : (
      <MyListItem
        text={text}
        index={index}
        item={item}
        // onCardPress={() => {}}
        onPressDone={onDone}
        onPressDelete={onDelete}
      />
    );
  };

  const renderList = ({}) => {
    return null;
  };

  const onCancel = () => {
    setEditing(false);
  };

  const showLabels =
    data.filter(e => e.completed).length &&
    data.filter(e => !e.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onCancelPress={onCancel}
        backLabel={editing ? 'Cancel' : 'Lists'}
        onBackPress={onBack}>
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
        <View style={{}}>
          {showLabels ? <ListText style={styles.label}>To-do</ListText> : null}
          <FlatList
            style={{backgroundColor: 'red'}}
            extraData={data}
            data={data.filter(e => !e.completed)}
            renderItem={renderItem}
          />
          {showLabels ? (
            <ListText style={[styles.label, {marginTop: 32}]}>
              Completed tasks
            </ListText>
          ) : null}
          <FlatList
            extraData={data}
            data={data.filter(e => e.completed)}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
