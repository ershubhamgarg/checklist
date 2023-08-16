import * as React from 'react';
import {TextInput, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import SwipableComponent from '../SwipableComponent';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';

const PDListItem = ({
  item,
  index,
  input,
  text,
  onChange,
  onPressDelete,
  onPressDone,
}) => {
  return (
    <View style={styles.container}>
      <SwipableComponent
        done={!item.completed && !item.attention}
        uncheck={item.completed}
        skip={item.optional}
        submitted={item.attention}
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
          <View
            style={{
              marginRight: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {item.attention ? (
              <Icon name={'attention-big'} />
            ) : item.completed ? (
              <Icon name={'completed'} />
            ) : item.skipped ? (
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
                    {color: item.completed ? '#AAAAAA' : null},
                  ]}>
                  {item.title}
                </ListText>
                <ListText
                  numberOfLines={1}
                  style={[
                    styles.title,
                    {color: COLORS.MARLOW_GREY_700, marginTop: 5},
                  ]}>
                  {item.id}
                </ListText>
              </View>
              {item.optional ? (
                <ListText
                  numberOfLines={1}
                  style={[styles.title, {color: COLORS.MARLOW_GREY_700}]}>
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
                  style={[styles.title, {color: COLORS.MARLOW_GREY_700}]}>
                  Issue date: {item.issueDate || 'N/A'}
                </ListText>
              </View>
              <ListText
                numberOfLines={1}
                style={[styles.title, {color: COLORS.MARLOW_GREY_700}]}>
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
