import {StyleSheet} from 'react-native';
import {JumpingTransition} from 'react-native-reanimated';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailListing: {
    flex: 0.25,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 16,
    paddingTop: 20,
  },
  backButton: {
    height: '100%',
    width: '30%',
    paddingLeft: 20,
    flexDirection: 'row',

    alignItems: 'center',
  },
  commonText: {
    fontSize: 18,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default styles;
