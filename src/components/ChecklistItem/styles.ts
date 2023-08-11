import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 16,
  },
  headerContainer: e => ({
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: e ? 0 : 7,
    backgroundColor: '#fff',
    shadowColor: '#0000000F',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  }),
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
    flex: 0.1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
