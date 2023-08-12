import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/AppHeader';
import ChecklistHeader from '../../components/ChecklistHeader';
import ChecklistItem from '../../components/ChecklistItem';
import Icon from '../../components/Icon';
import {styles} from './styles';
import {ChecklistItemProps} from './type';

export const Checklists = () => {
  const navigation = useNavigation();
  const {navigate} = navigation;

  const {myList} = useSelector(state => state.mychecklistreducer);

  const goback = () => {
    navigation.goBack();
  };

  const onHeaderCardPress = () => {
    navigate('PreDepartureList');
  };

  const onListCardPress = e => {
    navigate('EditList', {listData: e});
  };

  const onPressAdd = () => {
    navigate('AddList');
  };

  const _renderItem = ({item, index}) =>
    // : ChecklistItemProps
    {
      return (
        <ChecklistItem
          item={item}
          index={index}
          onCardPress={onListCardPress}
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
        onRefresh={() => {}}
        refreshing={!true}
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
