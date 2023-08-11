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

  progressContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSubTitle: {
    fontSize: 12,
    marginBottom: 12,
    marginTop: 4,
  },
  headerTitle: {fontSize: 14},
  percentText: {fontSize: 13},
  rl: {fontSize: 14},
});
