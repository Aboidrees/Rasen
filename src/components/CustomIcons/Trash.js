import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function Trash({size = 18, color = 'black', ...otherProps}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 22"
      width={size}
      height={size}
      {...otherProps}>
      <G>
        <Path
          id="Vector"
          d="M1 5.375H19.0001"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={'white'}
        />
        <Path
          id="Vector_2"
          d="M2.125 5.375L3.25 18.875C3.25 19.4718 3.48706 20.0441 3.90902 20.466C4.33097 20.888 4.90327 21.1251 5.50001 21.1251H14.5C15.0968 21.1251 15.6691 20.888 16.091 20.466C16.513 20.0441 16.75 19.4718 16.75 18.875L17.8751 5.375"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={'white'}
        />
        <Path
          id="Vector_3"
          d="M6.625 5.37502V2C6.625 1.70163 6.74353 1.41549 6.95451 1.20451C7.16549 0.993527 7.45163 0.875 7.75 0.875H12.25C12.5484 0.875 12.8345 0.993527 13.0455 1.20451C13.2565 1.41549 13.375 1.70163 13.375 2V5.37502"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={color}
        />
      </G>
    </Svg>
  );
}
