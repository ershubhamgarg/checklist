import * as React from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearMyList,
  getMyListRequest,
} from '../../store/reducers/mychecklistreducer';
import {RootState} from '../../store';
import Header from '../../components/AppHeader';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ChecklistHeader from '../../components/ChecklistHeader';

export function PreDepartureList() {
  const navigation = useNavigation();
  const {navigate} = navigation;
  const goback = () => {
    navigation.goBack();
  };

  const onHeaderCardPress = () => {
    navigate('Login');
  };

  const _renderItem = ({item, index}) => {
    return <Text>{item}</Text>;
  };

  const _listHeader = ({item, index}) => {
    return <ChecklistHeader onCardPress={onHeaderCardPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backLabel={'Back'}
        onBackPress={goback}
        title={'Pre-Departure Documents List'}></Header>
      <View>
        <Text>Pre-Departure Documents List</Text>
      </View>
    </SafeAreaView>
  );
}
