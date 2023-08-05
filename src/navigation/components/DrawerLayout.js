import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

export default function DrawerLayout(props) {
  return (
    <View style={styles.drawerContainer}>
      <Image
        source={require('../../assets/images/light-logo.png')}
        style={{
          width: 210,
          height: 190,
          alignSelf: 'center',
          marginTop: 30,
        }}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label={'Sign Out'}
        icon={() => <MaterialCommunityIcons name="logout-variant" {...props} />}
        onPress={() => {}}
      />
    </View>
  );
}
