import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function BackArrow({size = 18, color = 'black', ...otherProps}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 18"
      width={size}
      height={size}
      fill={color}
      {...otherProps}>
      <G>
        <Path
          id="Vector"
          d="M2.5 9L20.5 9"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Vector_2"
          d="M1.25 9L8.75 16.5"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Vector_3"
          d="M1.25 9L8.75 1.5"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
