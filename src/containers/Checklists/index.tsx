import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/AppHeader';
import ChecklistHeader from '../../components/ChecklistHeader';
import ChecklistItem from '../../components/ChecklistItem';
import Icon from '../../components/Icon';
import {
  deleteList,
  onGetPDListRequest,
} from '../../store/reducers/mychecklistreducer';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootState} from '../../store';
import {ChecklistItemProps} from './type';

export const Checklists = () => {
  const navigation = useNavigation<NativeStackNavigationProp>();
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {myList, pdListLoading} = useSelector(
    (state: RootState) => state.mychecklistreducer,
  );

  const goback = () => {
    navigation.goBack();
  };

  React.useEffect(() => {
    dispatch(onGetPDListRequest());
  }, []);

  const onHeaderCardPress = () => {
    navigate('PreDepartureList');
  };

  const onListCardPress = e => {
    navigate('EditList', {listData: e});
  };

  const onPressAdd = () => {
    navigate('AddList');
  };

  const onPressDelete = e => {
    dispatch(deleteList(e));
  };

  const onRefresh = () => {
    dispatch(onGetPDListRequest());
  };

  const _renderItem = ({item, index}: ChecklistItemProps) =>
    //
    {
      return (
        <ChecklistItem
          item={item}
          index={index}
          onCardPress={onListCardPress}
          onPressDelete={onPressDelete}
        />
      );
    };

  const _listHeader = () => {
    return <ChecklistHeader onCardPress={onHeaderCardPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={goback} title={'Checklists'} />

      <FlatList
        onRefresh={onRefresh}
        refreshing={pdListLoading}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeader}
        showsVerticalScrollIndicator={false}
        data={myList}
      />
      <Pressable onPress={onPressAdd}>
        <Icon name="add" />
      </Pressable>
    </SafeAreaView>
  );
};
