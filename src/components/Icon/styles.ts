import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  next: {height: 20, width: 20},
  add: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: 30,
    bottom: 30,
    shadowColor: '#0000000F',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  },
  attention: {height: 12, width: 12, marginRight: 5},
  attentionBig: {height: 20, width: 20, marginRight: 5},
  left: {height: 50, width: 40},
  cross: {height: 15, width: 15},
});
