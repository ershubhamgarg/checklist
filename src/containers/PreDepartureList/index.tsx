import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/AppHeader';
import Icon from '../../components/Icon';
import {ListProgress} from '../../components/ListProgress';
import ListText from '../../components/ListText';

import {COLORS} from '../../constants/colors';
import {
  doneItemFromPDList,
  onGetPDListRequest,
  skipItemFromPDList,
  submitItemFromPDList,
} from '../../store/reducers/mychecklistreducer';
import {styles} from './styles';
import PDListItem from '../../components/PDListItem';
export function PreDepartureList() {
  const navigation = useNavigation();
  const [tab, setTab] = React.useState(0);

  const {pdList} = useSelector(state => state.mychecklistreducer);
  const dispatch = useDispatch();
  const goback = () => {
    navigation.goBack();
  };

  let total = pdList[0].items.length;
  let completed = pdList[0].items.filter(e => e.completed).length;
  let progress = completed / total;

  React.useEffect(() => {
    dispatch(onGetPDListRequest());
  }, []);

  const _handleIndexChange = e => {
    setTab(e);
  };

  const onPressDone = e => {
    let listId = pdList[tab].key;
    let obj = {...e, listId: listId};

    dispatch(doneItemFromPDList(obj));
  };

  const onPressSubmitted = e => {
    let listId = pdList[tab].key;
    let obj = {...e, listId: listId};

    dispatch(submitItemFromPDList(obj));
  };
  const onPressSkipped = e => {
    let listId = pdList[tab].key;
    let obj = {...e, listId: listId};

    dispatch(skipItemFromPDList(obj));
  };

  const _renderItem = ({item, index}) =>
    // : ChecklistItemProps
    {
      return (
        <PDListItem
          item={item}
          index={index}
          onPressDone={onPressDone}
          onPressSubmitted={onPressSubmitted}
          onPressSkipped={onPressSkipped}
          // onCardPress={onListCardPress}
          // onCardPress={() => {}}
          // onPressDelete={onPressDelete}
        />
      );
    };

  const FirstRoute = ({...e}) => {
    let data = e.route.items;
    let completed = data.filter(e => e.completed);
    let pending = data.filter(e => !e.completed);
    return (
      <ScrollView
        style={[styles2.container, {backgroundColor: COLORS.MARLOW_NAVY}]}>
        <View style={{padding: 25}}>
          <ListText italic style={{fontSize: 12}}>
            Items should only be ticked off once the corresponding original
            paper document has been added to your Blue Pouch in preparation for
            departure.
          </ListText>
        </View>
        {pending.length ? (
          <ListText bold style={styles.label}>
            Pending
          </ListText>
        ) : null}
        {pending.map((item, index) => _renderItem({item, index}))}

        {completed.length ? (
          <ListText bold style={styles.label}>
            Completed
          </ListText>
        ) : null}
        {completed.map((item, index) => _renderItem({item, index}))}
      </ScrollView>
    );
  };
  const SecondRoute = e => {
    return (
      <View
        style={[styles2.container, {backgroundColor: COLORS.MARLOW_NAVY}]}
      />
    );
  };
  const _renderTabBar = props => {
    const {navigationState} = props;

    return (
      <View>
        <FlatList
          bounces={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => setTab(index)}
                  style={[
                    styles2.tabItem,
                    {
                      flexDirection: 'row',
                      borderBottomColor: COLORS.MARLOW_BLUE,
                      borderBottomWidth: tab === index ? 2 : 0,
                    },
                  ]}>
                  {item.requireAttention && <Icon name={'attention'} />}
                  <ListText
                    bold
                    style={{
                      color:
                        tab === index
                          ? COLORS.MARLOW_BLUE
                          : COLORS.MARLOW_NAVY_500,
                    }}>
                    {item.title}
                  </ListText>
                </TouchableOpacity>
              </View>
            );
          }}
          horizontal
          data={navigationState?.routes}
        />
      </View>
    );
  };

  const _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
    fourth: SecondRoute,
    fifth: SecondRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backLabel={'Back'}
        onBackPress={goback}
        title={'Pre-Departure Documents List'}></Header>
      <View style={{paddingVertical: 20}}>
        <ListProgress progress={progress} />
      </View>
      <TabView
        // swipeEnabled={false}
        navigationState={{
          index: tab,
          routes: pdList,
        }}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
      />
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    height: 1100,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    alignItems: 'center',
    padding: 10,
  },
});
