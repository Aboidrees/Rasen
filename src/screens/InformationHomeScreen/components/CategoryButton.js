import {Pressable, Text} from 'react-native';
import styles from '../styles';
import * as React from 'react';

export default function CategoryButton({isSelected, text = '', ...otherProps}) {
  if (text.length === 0) {
    return null;
  }

  return (
    <Pressable
      style={isSelected ? styles.categoryBtnSelected : styles.categoryBtn}
      {...otherProps}>
      <Text
        style={
          isSelected ? styles.categoryBtnTxtSelected : styles.categoryBtnTxt
        }>
        {text}
      </Text>
    </Pressable>
  );
}
