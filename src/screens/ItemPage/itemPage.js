import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import APPCONSTANT from '../../utils/constants';
import images from '../../assets/images';

export default function ItemPage(props) {
  const navigation = useNavigation();

  let {completed, title, userId, body, id} = props?.route?.params?.item;
  let {todo} = props?.route?.params;

  console.log(todo);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image style={styles.imageStyle} source={images.back} />
          <Text style={[styles.commonText, {paddingLeft: 5}]}>{'Back'}</Text>
        </Pressable>

        <Text style={[styles.commonText, {paddingLeft: 40}]}>
          {'Item Details'}
        </Text>
      </View>

      <View style={styles.detailListing}>
        <Text style={styles.textStyle}>{`User Id: ${userId}`}</Text>
        <Text style={styles.textStyle}>{`Title: ${title}`}</Text>
        <Text style={styles.textStyle}>
          {todo ? `Completed: ${completed}` : `Body: ${body}`}
        </Text>
      </View>
    </SafeAreaView>
  );
}
