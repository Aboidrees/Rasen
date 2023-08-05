import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BackArrow({size = 18, color = 'black', ...otherProps}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...otherProps}>
      <Path
        d="M3.57143 12.5714C4.99159 12.5714 6.14286 11.4202 6.14286 10C6.14286 8.57986 4.99159 7.42859 3.57143 7.42859C2.15127 7.42859 1 8.57986 1 10C1 11.4202 2.15127 12.5714 3.57143 12.5714Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4284 6.14286C17.8485 6.14286 18.9998 4.99159 18.9998 3.57143C18.9998 2.15127 17.8485 1 16.4284 1C15.0082 1 13.8569 2.15127 13.8569 3.57143C13.8569 4.99159 15.0082 6.14286 16.4284 6.14286Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4284 19C17.8485 19 18.9998 17.8488 18.9998 16.4286C18.9998 15.0084 17.8485 13.8572 16.4284 13.8572C15.0082 13.8572 13.8569 15.0084 13.8569 16.4286C13.8569 17.8488 15.0082 19 16.4284 19Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.46436 8.60709L13.5358 4.96423"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.46436 11.3928L13.5358 15.0357"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
