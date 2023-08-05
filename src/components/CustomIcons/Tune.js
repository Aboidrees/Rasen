import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export default function Like({size = 18, color = 'black', fill = false, ...otherProps}) {
    return (<Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
        {...otherProps}>

        <Path d="M10 3V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M15 3V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M5 3V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Circle cx="5" cy="14" r="1.25" fill="#F5F5F8" stroke={color} stroke-width="1.5"/>
        <Circle cx="15" cy="10" r="1.25" fill="#F5F5F8" stroke={color} stroke-width="1.5"/>
        <Circle cx="10" cy="4" r="1.25" fill="#F5F5F8" stroke={color} stroke-width="1.5"/>

    </Svg>);
}
