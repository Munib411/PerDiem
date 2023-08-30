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
  },
  textInput: {
    flex: 0.4,
    marginTop: 30,
    justifyContent: 'center',
  },
  googleLogin: {
    flex: 0.1,
  },
  buttonStyles: {
    height: 50,
    width: '90%',
    backgroundColor: '#3595f3',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginButtonStyle: {
    color: 'white',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});

export default styles;
