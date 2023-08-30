import {SafeAreaView, Text, View, FlatList, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import moment from 'moment';
import axios from 'axios';

import styles from './styles';
import APPCONSTANT from '../../utils/constants';
import {getGreeting} from '../../utils/helper';
import MainListing from '../../components/MainListing/MainListing';
import AppLoading from '../../components/AppLoading/AppLoading';

export default function Login() {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  const [todo, setTodo] = useState(true);
  const [post, setPost] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const onPressTodos = async () => {
    setTodo(true);
    setPost(false);
    await refRBSheet.current.close();
  };

  const onPressPosts = async () => {
    setTodo(false);
    setPost(true);
    await refRBSheet.current.close();
  };

  useEffect(() => {
    const greeting = getGreeting(moment());
    setGreeting(greeting);
    setTimeout(() => {
      getDataFromAPI();
    }, 500);
  }, [todo]);

  const getDataFromAPI = async () => {
    setLoading(true);

    if (todo) {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      setListing(res?.data);
      setLoading(false);
    } else {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setListing(res?.data);
      setLoading(false);
    }
  };

  const renderListing = item => {
    return (
      <MainListing
        item={item}
        todo={todo}
        onPress={() => navigation.navigate(APPCONSTANT.ITEMPAGE, {item, todo})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {AppLoading.renderLoading(loading)}

      <View style={styles.header}>
        <Text style={styles.headerText}>{'Home'}</Text>
        <Pressable onPress={() => refRBSheet.current.open()}>
          <Text style={styles.showBottomList}>{'Show Bottom List'}</Text>
        </Pressable>
      </View>
      <View style={styles.greetingUser}>
        <Text style={styles.greetingText}>
          {greeting + ': ' + APPCONSTANT.USERNAME}
        </Text>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={listing}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderListing(item)}
        />
      </View>

      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            backgroundColor: 'white',
          },
        }}>
        <View style={styles.commonStyle}>
          <Pressable
            onPress={() => onPressTodos()}
            style={[
              styles.radioButton,
              {
                backgroundColor: todo ? '#3595f3' : 'white',
                borderWidth: todo ? 0 : 1,
              },
            ]}></Pressable>
          <Text style={styles.commonText}>{'Todos Listing'}</Text>
        </View>
        <View style={[styles.commonStyle, {marginTop: 0}]}>
          <Pressable
            onPress={() => onPressPosts()}
            style={[
              styles.radioButton,
              {
                backgroundColor: post ? '#3595f3' : 'white',
                borderWidth: post ? 0 : 1,
              },
            ]}></Pressable>
          <Text style={styles.commonText}>{'Posts Listing'}</Text>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
