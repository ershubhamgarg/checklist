import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${COLORS.MARLOW_NAVY_800}D1`,
  },
  btnContainer: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 5,
    shadowOpacity: 0.2,
  },
  txt: {
    fontSize: 15,
  },
  backButton: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    shadowOpacity: 0.5,
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 200,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 30,
    paddingRight: 30,
    borderRadius: 7,
    shadowColor: '#0000000F',
    shadowOffset: {width: 1, height: 1},
    marginTop: 40,
  },
  inputOuter: {
    alignItems: 'center',
  },
  input: {
    height: 20,
    fontFamily: FONT.ROBOTO_REGULAR,
    fontSize: 16,
    paddingLeft: 20,

    width: '90%',
  },
  cross: {},
});
