import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import APPCONSTANT from '../../utils/constants';
import {useSelector} from 'react-redux';

export default function Splash() {
  const navigation = useNavigation();
  const reducerState = useSelector(state => state);
  let {islogin} = reducerState?.userProfileReducer?.isLogin;

  useEffect(() => {
    setTimeout(() => {
      if (islogin) {
        navigation.navigate(APPCONSTANT.BOTTOMTABS);
      } else {
        navigation.navigate(APPCONSTANT.LOGIN);
      }
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>{'Welcome to Pre Diem'}</Text>
    </SafeAreaView>
  );
}
