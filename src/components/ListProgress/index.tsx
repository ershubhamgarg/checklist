import * as React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import ListText from '../ListText';
import {styles} from './styles';
export function ListProgress({progress}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-end'}}>
        <ListText>{progress * 100 + '% completed'}</ListText>
      </View>
      <View style={styles.headerContainer}>
        <View
          style={{
            flex: progress,
            borderRadius: 10,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            style={styles.gradient}
            colors={[COLORS.MARLOW_BLUE, COLORS.MARLOW_GREEN]}></LinearGradient>
        </View>
      </View>
    </View>
  );
}
