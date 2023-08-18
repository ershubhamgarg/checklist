import * as React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/AppHeader';
import ChecklistHeader from '../../components/ChecklistHeader';
import ChecklistItem from '../../components/ChecklistItem';
import Icon from '../../components/Icon';

import {RootState} from '../../store';
import {
  deleteList,
  onGetPDListRequest,
} from '../../store/reducers/mychecklistreducer';

import {ChecklistItemProps} from './type';
import {ChecklistStackParamList} from '../../navigation/type';

import {usePDListProgress} from '../../utils';
import {styles} from './styles';

export const Checklists = () => {
  const navigation = useNavigation<NavigationProp<ChecklistStackParamList>>();
  const {navigate} = navigation;
  const dispatch = useDispatch();

  const {myList, pdListLoading} = useSelector(
    (state: RootState) => state.mychecklistreducer,
  );

  const [progress] = usePDListProgress();

  React.useEffect(() => {
    dispatch(onGetPDListRequest());
  }, []);

  const onHeaderCardPress = React.useCallback(() => {
    navigate('PreDepartureList');
  }, [navigate]);

  const onListCardPress = React.useCallback(
    (e: any) => {
      navigate('EditList', {listData: e});
    },
    [navigate],
  );

  const onPressAdd = React.useCallback(() => {
    navigate('AddList');
  }, [navigate]);

  const onPressDelete = React.useCallback(
    (e: any) => {
      dispatch(deleteList(e));
    },
    [dispatch],
  );

  const onRefresh = React.useCallback(() => {
    dispatch(onGetPDListRequest());
  }, [dispatch]);

  const _renderItem = React.useCallback(
    ({item, index}: ChecklistItemProps) => {
      return (
        <ChecklistItem
          item={item}
          index={index}
          onCardPress={onListCardPress}
          onPressDelete={onPressDelete}
        />
      );
    },
    [onListCardPress, onPressDelete],
  );

  const _listHeader = React.useCallback(() => {
    return (
      <ChecklistHeader progress={progress} onCardPress={onHeaderCardPress} />
    );
  }, [onHeaderCardPress, progress]);

  const renderHeader = React.useMemo(() => {
    return <Header onBackPress={navigation.goBack} title={'Checklists'} />;
  }, [navigation.goBack]);

  const renderAddBtn = React.useMemo(() => {
    return (
      <Pressable onPress={onPressAdd}>
        <Icon name="add" />
      </Pressable>
    );
  }, [onPressAdd]);

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader}
      <FlatList
        onRefresh={onRefresh}
        refreshing={pdListLoading}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeader}
        showsVerticalScrollIndicator={false}
        data={myList}
      />
      {renderAddBtn}
    </SafeAreaView>
  );
};
