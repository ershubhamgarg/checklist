import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import Header from '../../components/AppHeader';
import ChecklistHeader from '../../components/ChecklistHeader';
import ChecklistItem from '../../components/ChecklistItem';
import json from './../../json/ChecklistHome.json';
import {styles} from './styles';
import Icon from '../../components/Icon';

export function Checklists() {
  const navigation = useNavigation();
  const {navigate} = navigation;
  const goback = () => {
    navigation.goBack();
  };

  const onHeaderCardPress = () => {
    navigate('PreDepartureList');
  };

  const onListCardPress = e => {
    // alert(e.title);
  };

  const onPressAdd = () => {
    // alert('Add');
  };

  const _renderItem = ({item, index}) => {
    return (
      <ChecklistItem item={item} index={index} onCardPress={onListCardPress} />
    );
  };

  const _listHeader = ({item, index}) => {
    return <ChecklistHeader onCardPress={onHeaderCardPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={goback} title={'Checklists'}></Header>

      <FlatList
        onRefresh={() => {}}
        refreshing={!true}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeader}
        showsVerticalScrollIndicator={false}
        data={json}
      />
      <Pressable onPress={onPressAdd}>
        <Icon name="add" />
      </Pressable>
    </SafeAreaView>
  );
}
