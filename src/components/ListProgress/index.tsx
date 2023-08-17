import * as React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import ListText from '../ListText';
import {styles} from './styles';
export function ListProgress({progress}) {
  // : {progress: number}
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ListText>{progress * 100 + '% completed'}</ListText>
      </View>
      <View style={styles.headerContainer}>
        <View style={[styles.gradientContainer, {flex: progress}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            style={styles.gradient}
            colors={[COLORS.MARLOW_BLUE, COLORS.MARLOW_GREEN]}
          />
        </View>
      </View>
    </View>
  );
}
