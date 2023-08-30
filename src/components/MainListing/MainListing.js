import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

export default function MainListing(props) {
  let {item, onPress} = props;

  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.textStyle}>{`User Id: ${item?.userId}`}</Text>
      <Text
        style={[
          styles.textStyle,
          {paddingTop: 10, paddingBottom: 10},
        ]}>{`Title: ${item?.title}`}</Text>
    </Pressable>
  );
}
