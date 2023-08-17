import * as React from 'react';
import {Image} from 'react-native';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';
import {IconProps} from './types';

const Icon = ({name}: IconProps) => {
  return name === 'next' ? (
    <Image
      source={require('./../../assets/images/next.png')}
      resizeMode={'contain'}
      style={styles.next}
      tintColor={'#AAAAAA'}
    />
  ) : name === 'add' ? (
    <Image
      source={require('./../../assets/images/addIcon.png')}
      resizeMode={'contain'}
      style={styles.add}
    />
  ) : name === 'delete' ? (
    <Image
      source={require('./../../assets/images/delete.png')}
      resizeMode={'contain'}
      style={styles.next}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'attention' ? (
    <Image
      source={require('./../../assets/images/attention.png')}
      resizeMode={'contain'}
      style={styles.attention}
    />
  ) : name === 'attention-big' ? (
    <Image
      source={require('./../../assets/images/attention.png')}
      resizeMode={'contain'}
      style={styles.attentionBig}
    />
  ) : name === 'done' ? (
    <Image
      source={require('./../../assets/images/done.png')}
      resizeMode={'contain'}
      style={styles.next}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'uncheck' ? (
    <Image
      source={require('./../../assets/images/uncheck.png')}
      resizeMode={'contain'}
      style={styles.next}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'skip' ? (
    <Image
      source={require('./../../assets/images/skip.png')}
      resizeMode={'contain'}
      style={styles.next}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'cross' ? (
    <Image
      source={require('./../../assets/images/close.png')}
      resizeMode={'contain'}
      style={styles.cross}
    />
  ) : name === 'item' ? (
    <Image
      source={require('./../../assets/images/item.png')}
      resizeMode={'contain'}
      style={styles.next}
    />
  ) : name === 'skipped' ? (
    <Image
      source={require('./../../assets/images/skip-blue.png')}
      resizeMode={'contain'}
      style={styles.next}
    />
  ) : name === 'completed' ? (
    <Image
      source={require('./../../assets/images/tick-blue.png')}
      resizeMode={'contain'}
      style={styles.next}
    />
  ) : (
    <Image
      source={require('./../../assets/images/left.png')}
      resizeMode={'contain'}
      style={styles.left}
    />
  );
};
export default Icon;
