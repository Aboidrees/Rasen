import {Text, View} from 'react-native';

export default function ScreenHeadLayout({
  leading = null,
  trailing = [],
  title = '',
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 15,
        marginHorizontal: 25,
        alignItems: 'center',
      }}>
      <View style={{maxWidth: 40, maxHeight: 40}}>{leading}</View>
      <View style={{flexGrow: 1, marginStart: 20}}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 18,
            letterSpacing: 0.42,
          }}>
          {title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {trailing.length > 0 &&
          trailing.map((component, index) => (
            <View key={index} style={{paddingEnd: 10}}>
              {component}
            </View>
          ))}
      </View>
    </View>
  );
}
