import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Pressable, SafeAreaView, View} from 'react-native';

import {} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Header from '../../components/AppHeader';
import ListText from '../../components/ListText';
import MyListItem from '../../components/MyListItem';
import json from './../../json/myList.json';
import {styles} from './styles';
export function EditList(props: any) {
  const {route} = props;
  const {params} = route;
  const {listData} = params;
  const data = json.map((item, index) => {
    return {...item, personal: true, optional: true};
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [editing, setEditing] = React.useState(false);

  const onBack = () => {
    navigation.goBack();
  };

  const onEdit = () => {
    setEditing(true);
  };

  const renderItem = ({item, index}) => (
    <MyListItem index={index} item={item} onCardPress={() => {}} />
  );
  return (
    <SafeAreaView
      // blurRadius={1}
      style={styles.container}>
      <Header backLabel="Lists" onBackPress={onBack}>
        {editing ? (
          <Pressable onPress={onEdit} style={styles.done}>
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
