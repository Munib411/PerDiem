import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import styles from './styles';
import APPCONSTANT from '../../utils/constants';
import {setLoginStatus} from '../../store/Actions/userProfileAction';
import AppLoading from '../../components/AppLoading/AppLoading';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('jhon@example.com');
  const [password, setPassword] = useState('123456789');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '542022793698-aneva639ia85a5613pkvgsmkitmt4reu.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
      iosClientId:
        '542022793698-gg69ro9fu3drq72co7plm8q0465ce0lt.apps.googleusercontent.com', // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  }, []);

  const onPressGoogle = async () => {
    setLoading(true);
    try {
      const {idToken} = await GoogleSignin.signIn();
      if (idToken) {
        setLoading(false);
        dispatch(setLoginStatus(true));
        navigation.navigate(APPCONSTANT.BOTTOMTABS);
      }
    } catch (error) {
      setLoading(false);
      alert('Something went wrong. Please try again later');
      console.log('Signin with Google Error', error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {AppLoading.renderLoading(loading)}

      <View style={styles.header}>
        <Text style={styles.headerText}>{'Login'}</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          onChangeText={text => setUserName(text)}
          value={userName}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <Pressable
          style={styles.buttonStyles}
          onPress={() => {
            dispatch(setLoginStatus(true));
            navigation.navigate(APPCONSTANT.BOTTOMTABS);
          }}>
          <Text style={styles.loginButtonStyle}>{'Login'}</Text>
        </Pressable>
      </View>

      <View style={styles.googleLogin}>
        <Pressable
          style={[
            styles.buttonStyles,
            {borderColor: '#3595f3', backgroundColor: 'white', borderWidth: 2},
          ]}
          onPress={() => {
            onPressGoogle();
            // navigation.navigate(APPCONSTANT.BOTTOMTABS);
          }}>
          <Text style={[styles.loginButtonStyle, {color: '#3595f3'}]}>
            {'Login with google'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
