import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

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
import {ChecklistStackParamList} from '../../navigation/type';
import {RootState} from '../../store';
import {EditListProps} from './type';

export function EditList(props: EditListProps) {
  const {route} = props;
  const {params} = route;
  const {listData} = params;

  const navigation = useNavigation<NavigationProp<ChecklistStackParamList>>();
  const dispatch = useDispatch();

  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState('');
  const {myList} = useSelector<RootState, any>(
    state => state.mychecklistreducer,
  );
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let arr = myList.filter((item: any) => item.listId === listData.listId)[0]
      .items;

    if (arr?.length) {
      setData(arr);
    } else {
      let arr = [{input: true}];
      setData(arr);
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
        personal: true,
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

  const onChange = (e: any) => {
    setText(e);
  };

  const onDone = (e: any) => {
    dispatch(doneItemFromList(e));
  };

  const onDelete = (e: any) => {
    dispatch(deleteItemFromList(e));
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return item?.input ? (
      <MyListItem
        key={'input'}
        index={index}
        input={true}
        item={item}
        onChange={onChange}
      />
    ) : (
      <MyListItem
        key={item.itemId}
        text={text}
        index={index}
        item={item}
        onPressDone={onDone}
        onPressDelete={onDelete}
      />
    );
  };

  const onCancel = () => {
    setEditing(false);
    data.pop();
  };

  let todo = data.filter(e => !e.completed);
  let completed = data.filter(e => e.completed);

  const showLabels = todo.length && completed.length;

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
        <ScrollView style={{flex: 1}}>
          {showLabels ? <ListText style={styles.label}>To-do</ListText> : null}
          {todo.map((item, index) => renderItem({item, index}))}
          {showLabels && !editing ? (
            <ListText style={[styles.label, {marginTop: 32}]}>
              Completed tasks
            </ListText>
          ) : null}
          {!editing
            ? completed.map((item, index) => renderItem({item, index}))
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
