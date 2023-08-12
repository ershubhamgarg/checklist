import * as React from 'react';
import {Pressable, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import SwipableComponent from '../SwipableComponent';
import {styles} from './styles';
import {ChecklistItemProps} from './types';

const MyListItem = ({item, index, onCardPress}: ChecklistItemProps) => {
  const {title} = item;

  return (
    <View style={styles.container}>
      <SwipableComponent
        deletee={true}
        done={true}
        personal={item.personal}
        onPressDone={() => {
          console.log(item.title);
        }}
        setOpen={() => {}}>
        <View
          style={[
            styles.headerContainer,
            {borderTopWidth: index == 0 ? 1 : 0},
          ]}>
          <View style={{marginRight: 20}}>
            <Icon name={'item'} />
          </View>
          <View style={styles.titleContainer}>
            <ListText numberOfLines={1} style={styles.title}>
              {title}
            </ListText>
          </View>
        </View>
      </SwipableComponent>
    </View>
  );
};
export default MyListItem;
