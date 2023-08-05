import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Eye({size = 18, color = 'black', ...otherProps}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 11"
      width={size}
      height={size}
      fill="none"
      {...otherProps}>
      <Path
        d="M7.5 6.75C8.19036 6.75 8.75 6.19036 8.75 5.5C8.75 4.80964 8.19036 4.25 7.5 4.25C6.80964 4.25 6.25 4.80964 6.25 5.5C6.25 6.19036 6.80964 6.75 7.5 6.75Z"
        fill={color}
      />
      <Path
        d="M13.75 5.5C12.0831 8.41688 10 9.875 7.5 9.875C5 9.875 2.91688 8.41688 1.25 5.5C2.91688 2.58313 5 1.125 7.5 1.125C10 1.125 12.0831 2.58313 13.75 5.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
