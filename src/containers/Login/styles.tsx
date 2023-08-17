import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.MARLOW_BLUE,
  },
  txt: {
    fontSize: 15,
    color: COLORS.MARLOW_BLUE,
  },
  image: {
    height: 300,
    width: 300,

    alignSelf: 'center',
  },
});
