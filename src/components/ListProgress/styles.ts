import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 0.4,
    borderRadius: 10,
    borderStyle: 'dashed',
    overflow: 'hidden',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C7CBCE',
    marginTop: 10,
  },
  txt: e => ({
    fontSize: e ? 14 : 16,
  }),

  gradient: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderStyle: 'dashed',
  },

  buttonContainer: {
    flex: 0.2,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
