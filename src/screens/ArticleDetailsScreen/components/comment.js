import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';

export default function Comment({
  username,
  content,
  datetime,
  replies,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: 10,
        height: 122,
        borderRadius: 30,
        backgroundColor: '#F5F5F8',
        gap: 16,
      }}>
      <Image
        source={require('../../../assets/images/horse.png')}
        style={{
          objectFit: 'cover',
          width: 60,
          height: 60,
          borderRadius: 45,
          marginTop: 16,
          marginLeft: 16,
        }}
      />

      <View
        style={{
          flexDirection: 'column',
          marginTop: 16,
          marginRight: 16,
          gap: 8,
        }}>
        {/* top text */}
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              color: '#000000',
              fontFamily: 'Montserrat',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: '700',
            }}>
            {username}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 16,
            lineHeight: 18,
            letterSpacing: 0,
            fontWeight: '600',
            textAlign: 'left',
            width: 220,
          }}>
          {content}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#607698',
              fontFamily: 'Montserrat',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              paddingRight: 12,
            }}>
            {datetime}
          </Text>
          <Text
            style={{
              color: '#607698',
              fontFamily: 'Montserrat',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              paddingRight: 12,
            }}>
            {replies}
          </Text>
        </View>
      </View>
      <View />
    </Pressable>
  );
}
