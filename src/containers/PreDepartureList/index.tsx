import * as React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
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
import {SceneMap, TabView} from 'react-native-tab-view';
import {ListProgress} from '../../components/ListProgress';
import PDDListJson from './../../json/PDDList.json';
import {ScrollView} from 'react-native-gesture-handler';
import ListText from '../../components/ListText';
import {COLORS} from '../../constants/colors';
import Icon from '../../components/Icon';
export function PreDepartureList() {
  const navigation = useNavigation();
  const [tab, setTab] = React.useState(0);
  const goback = () => {
    navigation.goBack();
  };

  const _handleIndexChange = e => {
    setTab(e);
  };
  const FirstRoute = () => (
    <View style={[styles2.container, {backgroundColor: COLORS.MARLOW_NAVY}]}>
      <View style={{padding: 25}}>
        <ListText italic style={{fontSize: 12}}>
          Items should only be ticked off once the corresponding original paper
          document has been added to your Blue Pouch in preparation for
          departure.
        </ListText>
      </View>
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles2.container, {backgroundColor: COLORS.MARLOW_NAVY}]} />
  );
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
        <ListProgress progress={0.7} />
      </View>
      <TabView
        navigationState={{
          index: tab,
          routes: PDDListJson,
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
