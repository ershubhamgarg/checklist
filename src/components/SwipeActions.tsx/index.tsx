import * as React from 'react';
import {Pressable, View} from 'react-native';
import ListText from '../ListText';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';
import Icon from '../Icon';

export function SwipeActions({deletee, done, onPressDone, skip, submitted}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopRightRadius: 7,
        overflow: 'hidden',
        height: 90,
        borderBottomRightRadius: 7,
      }}>
      {done ? (
        <Pressable
          onPress={onPressDone}
          style={[styles.container, styles.done]}>
          <Icon name={'done'} />
          <ListText style={styles.txt}>Done</ListText>
        </Pressable>
      ) : null}
      {skip ? (
        <Pressable style={[styles.container, styles.skip]}>
          <Icon name={'skip'} />
          <ListText style={styles.txt}>Skip</ListText>
        </Pressable>
      ) : null}
      {submitted ? (
        <Pressable style={[styles.container, styles.submitted]}>
          <Icon name={'done'} />
          <ListText style={styles.txt}>Submitted</ListText>
        </Pressable>
      ) : null}
      {deletee ? (
        <Pressable style={[styles.container, styles.delete]}>
          <Icon name={'delete'} />
          <ListText medium style={styles.txt}>
            DELETE
          </ListText>
        </Pressable>
      ) : null}
    </View>
  );
}
