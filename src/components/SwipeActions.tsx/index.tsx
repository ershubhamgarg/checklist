import * as React from 'react';
import {Pressable, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import {styles} from './styles';
import {SwipeActionsProps} from './types';

export function SwipeActions({
  deletee,
  done,
  onPressDone,
  skip,
  submitted,
  personal,
  onPressDelete,
  uncheck,
  onPressSubmitted,
  onPressSkipped,
}: SwipeActionsProps) {
  const br = personal ? 0 : 7;
  return (
    <View
      style={[
        styles.mainContainer,
        {borderTopRightRadius: br, borderBottomRightRadius: br},
      ]}>
      {done ? (
        <Pressable
          onPress={onPressDone}
          style={[styles.container, styles.done]}>
          <Icon name={'done'} />
          <ListText style={styles.txt}>Done</ListText>
        </Pressable>
      ) : null}
      {uncheck ? (
        <Pressable
          onPress={onPressDone}
          style={[styles.container, styles.done]}>
          <Icon name={'uncheck'} />
          <ListText style={styles.txt}>Uncheck</ListText>
        </Pressable>
      ) : null}
      {skip ? (
        <Pressable
          onPress={onPressSkipped}
          style={[styles.container, styles.skip]}>
          <Icon name={'skip'} />
          <ListText style={styles.txt}>Skip</ListText>
        </Pressable>
      ) : null}
      {submitted ? (
        <Pressable
          onPress={onPressSubmitted}
          style={[styles.container, styles.submitted]}>
          <Icon name={'done'} />
          <ListText style={styles.txt}>Submitted</ListText>
        </Pressable>
      ) : null}
      {deletee ? (
        <Pressable
          onPress={onPressDelete}
          style={[
            styles.container,
            styles.delete,
            {borderTopRightRadius: br, borderBottomRightRadius: br},
          ]}>
          <Icon name={'delete'} />
          <ListText medium style={styles.txt}>
            DELETE
          </ListText>
        </Pressable>
      ) : null}
    </View>
  );
}
