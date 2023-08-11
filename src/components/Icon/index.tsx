import * as React from 'react';
import {Image} from 'react-native';
import {COLORS} from '../../constants/colors';

const Icon = ({name}) => {
  return name === 'next' ? (
    <Image
      source={require('./../../assets/images/next.png')}
      resizeMode={'contain'}
      style={{height: 20, width: 20}}
      tintColor={'#AAAAAA'}
    />
  ) : name === 'add' ? (
    <Image
      source={require('./../../assets/images/addIcon.png')}
      resizeMode={'contain'}
      style={{
        height: 60,
        width: 60,
        position: 'absolute',
        right: 30,
        bottom: 30,
        shadowColor: '#0000000F',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
      }}
    />
  ) : name === 'delete' ? (
    <Image
      source={require('./../../assets/images/delete.png')}
      resizeMode={'contain'}
      style={{height: 20, width: 20}}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'done' ? (
    <Image
      source={require('./../../assets/images/done.png')}
      resizeMode={'contain'}
      style={{height: 20, width: 20}}
      tintColor={COLORS.WHITE}
    />
  ) : name === 'skip' ? (
    <Image
      source={require('./../../assets/images/skip.png')}
      resizeMode={'contain'}
      style={{height: 20, width: 20}}
      tintColor={COLORS.WHITE}
    />
  ) : (
    <Image
      source={require('./../../assets/images/left.png')}
      resizeMode={'contain'}
      style={{height: 50, width: 40}}
    />
  );
};
export default Icon;
