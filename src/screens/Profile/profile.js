import {SafeAreaView, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import APPCONSTANT from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {setLoginStatus} from '../../store/Actions/userProfileAction';

export default function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{'Profile'}</Text>
      </View>

      <View style={styles.userDetails}>
        <Text style={styles.commonText}>{`Name: ${APPCONSTANT.USERNAME}`}</Text>
        <Text style={styles.commonText}>{`Email: ${APPCONSTANT.EMAIL}`}</Text>
        <Text style={styles.commonText}>{`DOB: ${APPCONSTANT.DOB}`}</Text>
        <Text
          style={styles.commonText}>{`Location: ${APPCONSTANT.Location}`}</Text>
      </View>

      <View style={styles.logout}>
        <Pressable
          style={[
            styles.buttonStyles,
            {borderColor: '#3595f3', backgroundColor: '#3595f3'},
          ]}
          onPress={() => {
            dispatch(setLoginStatus(false));
            navigation.navigate(APPCONSTANT.LOGIN);
          }}>
          <Text style={[styles.logoutButtonStyle, {color: 'white'}]}>
            {'Logout'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
