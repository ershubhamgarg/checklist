import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  txt: e => ({
    fontSize: e ? 14 : 16,
  }),
  backIconContainer: e => ({
    flex: e ? 0.3 : 0.2,
    flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }),
  titleContainer: e => ({
    flex: e ? 0.5 : 0.8,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  buttonContainer: {
    flex: 0.2,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
