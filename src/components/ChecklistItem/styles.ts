import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 16,
  },
  headerContainer: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: '#0000000F',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  },
  titleContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {marginTop: 30},
  title: {fontSize: 14},
  subtitle: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 4,
  },
  date: {fontSize: 12, color: COLORS.MARLOW_GREY, marginTop: 4},
  last: {fontSize: 12, color: COLORS.MARLOW_GREY},
});
