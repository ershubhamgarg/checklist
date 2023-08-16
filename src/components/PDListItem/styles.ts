import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    height: 90,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.MARLOW_NAVY,
    borderColor: COLORS.MARLOW_GREY,
    borderBottomWidth: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {marginTop: 30},
  title: {fontSize: 12},
  subtitle: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 4,
  },
  date: {fontSize: 12, color: COLORS.MARLOW_GREY, marginTop: 4},
  last: {fontSize: 12, color: COLORS.MARLOW_GREY},
});
