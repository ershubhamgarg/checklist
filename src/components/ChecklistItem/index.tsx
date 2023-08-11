import * as React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon';
import ProgressCircle from 'react-native-progress-circle';
import ListText from '../ListText';
import {COLORS} from '../../constants/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SwipableComponent from '../SwipableComponent';
const ChecklistItem = ({item, index, onCardPress}) => {
  const [isOpen, setOpen] = React.useState(false);
  const {title, createdOn, lastItem} = item;

  return (
    <View style={styles.container}>
      {!index && (
        <View style={{marginTop: 30}}>
          <ListText medium style={{fontSize: 14}}>
            {'My Checklists'}
          </ListText>
          <ListText
            italic
            style={{
              fontSize: 12,
              marginBottom: 12,
              marginTop: 4,
            }}>
            {'Create your own personal checklist'}
          </ListText>
        </View>
      )}
      <SwipableComponent
        deletee={item.personal}
        done={item.mandatory || item.optional}
        skip={item.optional}
        submitted={item.attentionRequired}
        onPressDone={() => {
          alert(item.title);
        }}
        setOpen={setOpen}>
        <Pressable
          // onPress={() => onCardPress(item)}
          style={styles.headerContainer(isOpen)}>
          <View style={styles.titleContainer}>
            <ListText numberOfLines={1} style={{fontSize: 14}}>
              {title}
            </ListText>
            <ListText
              style={{fontSize: 12, color: COLORS.MARLOW_GREY, marginTop: 4}}>
              {'Date created: '}
              {createdOn}
            </ListText>
            <ListText style={{fontSize: 12, color: COLORS.MARLOW_GREY}}>
              {'Last item added: '}
              {lastItem}
            </ListText>
          </View>
          <View style={styles.buttonContainer}>
            {!isOpen && <Icon name={'next'} />}
          </View>
        </Pressable>
      </SwipableComponent>
    </View>
  );
};

export default ChecklistItem;
