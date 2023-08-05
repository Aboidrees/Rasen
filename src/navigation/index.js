import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import styles from './styles';
import InfoStackNavigation from './InfoStackNavigation';

export default function Navigation() {
  return (
    <NavigationContainer style={styles.container}>
      <InfoStackNavigation />
    </NavigationContainer>
  );
}
