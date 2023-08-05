import {Image} from 'react-native';
import * as React from 'react';

export default function Advertisements() {
  return (
    <Image
      source={require('../../../assets/images/advertise1.png')}
      style={{
        width: 'auto',
        height: 175,
        borderRadius: 25,
        marginBottom: 25,
      }}
    />
  );
}
