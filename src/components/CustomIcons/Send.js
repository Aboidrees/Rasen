import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Eye({size = 18, color = 'black', ...otherProps}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={size}
      height={size}
      fill="none"
      {...otherProps}>
      <Path
        d="M7.33301 10.6667L16.4997 1.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4998 1.5L11.0831 16.5C11.0466 16.5798 10.9879 16.6474 10.914 16.6948C10.8402 16.7422 10.7542 16.7674 10.6665 16.7674C10.5787 16.7674 10.4928 16.7422 10.4189 16.6948C10.3451 16.6474 10.2864 16.5798 10.2498 16.5L7.33315 10.6667L1.49981 7.75C1.42003 7.71344 1.35242 7.65474 1.30502 7.58088C1.25762 7.50701 1.23242 7.4211 1.23242 7.33333C1.23242 7.24557 1.25762 7.15965 1.30502 7.08579C1.35242 7.01193 1.42003 6.95323 1.49981 6.91667L16.4998 1.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
