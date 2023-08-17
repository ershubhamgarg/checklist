import {NavigationProp, useNavigation} from '@react-navigation/native';
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
import {RootState} from '../../store';
import {ChecklistItemProps} from './type';
import {usePDListProgress} from '../../utils';
import {ChecklistStackParamList} from '../../navigation/type';

export const Checklists = () => {
  const navigation = useNavigation();
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {myList, pdListLoading} = useSelector(
    (state: RootState) => state.mychecklistreducer,
  );
  const [progress] = usePDListProgress();
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
    return (
      <ChecklistHeader progress={progress} onCardPress={onHeaderCardPress} />
    );
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
