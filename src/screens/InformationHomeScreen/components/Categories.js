import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import styles from '../styles';
import CategoryButton from './CategoryButton';

export default function Categories({categories}) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryBtnsOuterContainer}
      contentContainerStyle={styles.categoryBtnsInnerContainer}>
      {categories.map((value, index) => {
        return (
          <CategoryButton
            key={index}
            isSelected={index === categoryIndex}
            text={value}
            onPress={() => setCategoryIndex(index)}
          />
        );
      })}
    </ScrollView>
  );
}
