import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../constants/colors';
import Icon from '../Icon';
import ListText from '../ListText';
import SwipableComponent from '../SwipableComponent';
import {styles} from './styles';
import {PDlistItemProps} from './types';

const PDListItem = ({
  item,
  index,
  onPressSubmitted = () => {},
  onPressSkipped = () => {},
  onPressDone = () => {},
}: PDlistItemProps) => {
  return (
    <View style={styles.container}>
      <SwipableComponent
        done={!item.completed && !item.attention}
        uncheck={item.completed}
        skip={item.optional && !item.completed}
        submitted={item.attention && !item.completed}
        personal
        onPressDone={() => {
          onPressDone(item);
        }}
        onPressSubmitted={() => {
          onPressSubmitted(item);
        }}
        onPressSkipped={() => {
          onPressSkipped(item);
        }}
        setOpen={() => {}}>
        <View
          style={[
            styles.headerContainer,
            {borderTopWidth: index == 0 ? 1 : 0},
          ]}>
          <View
            style={{
              marginRight: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {item.attention ? (
              <Icon name={'attention-big'} />
            ) : item.completed && !item.optional ? (
              <Icon name={'completed'} />
            ) : item.completed && item.optional ? (
              <Icon name={'skipped'} />
            ) : (
              <Icon name={'item'} />
            )}
          </View>
          <View style={[styles.titleContainer]}>
            <View
              style={{
                flex: 0.5,

                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {color: item.completed ? COLORS.MARLOW_GREY_600 : null},
                  ]}>
                  {item.title}
                </ListText>
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {
                      color: item.completed
                        ? COLORS.MARLOW_GREY_600
                        : COLORS.MARLOW_GREY_700,
                      marginTop: 5,
                    },
                  ]}>
                  {item.id}
                </ListText>
              </View>
              {item.optional ? (
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {color: item.completed ? COLORS.MARLOW_GREY_600 : null},
                  ]}>
                  (Optional)
                </ListText>
              ) : null}
            </View>
            <View
              style={{
                flex: 0.5,
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <View>
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {color: item.completed ? COLORS.MARLOW_GREY_600 : null},
                  ]}>
                  Issue date: {item.issueDate || 'N/A'}
                </ListText>
              </View>
              <ListText
                numberOfLines={1}
                style={[
                  styles.title,
                  {color: item.completed ? COLORS.MARLOW_GREY_600 : null},
                ]}>
                Exp. date: {item.expiryDate || 'N/A'}
              </ListText>
            </View>
          </View>
        </View>
      </SwipableComponent>
    </View>
  );
};

export default PDListItem;
