import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BookmarkPlus({
  size = 30,
  color = 'black',
  ...otherProps
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={'0 0 30 30'}
      fill="none"
      {...otherProps}>
      <Path
        d="M10.5 4.5H19.5C20.2956 4.5 21.0587 4.77656 21.6213 5.26884C22.1839 5.76113 22.5 6.42881 22.5 7.125V22.1911C22.5 23.6701 22.5 24.4096 22.0173 24.7014C21.5346 24.9931 20.8798 24.6494 19.5703 23.9619L15.9297 22.0506C15.4743 21.8115 15.2465 21.6919 15 21.6919C14.7535 21.6919 14.5257 21.8115 14.0703 22.0506L10.4297 23.9619C9.12018 24.6494 8.46543 24.9931 7.98272 24.7014C7.5 24.4096 7.5 23.6701 7.5 22.1911V7.125C7.5 6.42881 7.81607 5.76113 8.37868 5.26884C8.94129 4.77656 9.70435 4.5 10.5 4.5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 10.5V16.5M12 13.5H18H12Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
