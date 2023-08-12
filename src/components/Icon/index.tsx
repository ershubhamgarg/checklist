import * as React from 'react';
import {Image} from 'react-native';
import {COLORS} from '../../constants/colors';
import {IconProps} from './types';
import {styles} from './styles';

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
  ) : name === 'done' ? (
    <Image
      source={require('./../../assets/images/done.png')}
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
  ) : (
    <Image
      source={require('./../../assets/images/left.png')}
      resizeMode={'contain'}
      style={styles.left}
    />
  );
};
export default Icon;
