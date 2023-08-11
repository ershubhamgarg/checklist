import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 16,
    marginTop: 40,
  },
  headerContainer: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 7,
    backgroundColor: '#fff',
    shadowColor: '#0000000F',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  },
  txt: e => ({
    fontSize: e ? 14 : 16,
  }),
  progressContainer: {
    flex: 0.2,
    flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.6,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
