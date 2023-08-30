import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  greetingUser: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 0.8,
  },

  commonStyle: {
    marginTop: 20,
    height: 80,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  radioButton: {
    height: 23,
    width: 23,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
  },
  commonText: {
    paddingLeft: 15,
    fontSize: 18,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  showBottomList: {
    fontSize: 15,
    color: '#3595f3',
    paddingTop: 10,
  },
  greetingText: {
    fontSize: 20,
  },
});

export default styles;
