import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    backgroundColor: COLORS.MARLOW_RED,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  done: {backgroundColor: COLORS.MARLOW_GREEN},
  skip: {backgroundColor: COLORS.MARLOW_DARK_BLUE},
  submitted: {backgroundColor: COLORS.MARLOW_DARK_BLUE},
  txt: {
    color: COLORS.WHITE,
    fontSize: 12,
    marginTop: 10,
  },
  icon: {},
});
