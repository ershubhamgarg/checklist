import * as React from 'react';
import {TextInput, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import SwipableComponent from '../SwipableComponent';
import {styles} from './styles';
import {ChecklistItemProps} from './types';

const MyListItem = ({
  item,
  index,
  input,
  text,
  onChange,
  onPressDelete,
  onPressDone,
}) =>
  // : ChecklistItemProps
  {
    const onChangeText = e => {
      onChange(e);
    };
    if (input) {
      return (
        <View style={styles.container}>
          <View
            style={[
              styles.headerContainer,
              {borderTopWidth: index == 0 ? 1 : 0},
            ]}>
            <View style={{marginRight: 20}}>
              <Icon name={'item'} />
            </View>
            <View style={[styles.titleContainer]}>
              <TextInput
                value={text}
                onChangeText={onChangeText}
                placeholder="Enter here"
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SwipableComponent
            deletee={!item.completed && item.personal}
            done={!item.completed}
            uncheck={item.completed}
            skip={item.optional}
            personal
            onPressDone={() => {
              onPressDone(item);
            }}
            onPressDelete={() => {
              onPressDelete(item);
            }}
            setOpen={() => {}}>
            <View
              style={[
                styles.headerContainer,
                {borderTopWidth: index == 0 ? 1 : 0},
              ]}>
              <View style={{marginRight: 20}}>
                {item.attention ? (
                  <Icon name={'attention-big'} />
                ) : (
                  <Icon name={'item'} />
                )}
              </View>
              <View style={styles.titleContainer}>
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {color: item.completed ? '#AAAAAA' : null},
                  ]}>
                  {item.title}
                </ListText>
              </View>
            </View>
          </SwipableComponent>
        </View>
      );
    }
  };
export default MyListItem;
