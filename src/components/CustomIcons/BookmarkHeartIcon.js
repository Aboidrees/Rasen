import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BookmarkHeartIcon({
  size = 18,
  color = 'black',
  ...otherProps
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill={color}
      {...otherProps}>
      <Path
        opacity="0.4"
        d="M15.3969 20.5554L15 20.3286L14.6031 20.5554L7.05 24.8715V7.5C7.05 6.37332 7.33113 5.67524 7.75319 5.25319C8.17524 4.83113 8.87332 4.55 10 4.55H20C21.1267 4.55 21.8248 4.83113 22.2468 5.25319C22.6689 5.67524 22.95 6.37332 22.95 7.5V24.8715L15.3969 20.5554Z"
        fill={color}
        stroke={color}
        strokeWdth="1.6"
      />

      <Path
        fill={color}
        stroke={color}
        strokeWdth="1.6"
        d="M17.8299 7.46508C16.6569 13.5151 8.99998 17.0001 8.99998 17.0001C8.99998 17.0001 1.34292 13.5151 0.168923 7.46508C-0.551077 3.75308 1.02197 0.019056 5.02097 5.60077e-05C7.99997 -0.013944 8.99998 2.98803 8.99998 2.98803C8.99998 2.98803 10 -0.014944 12.978 5.60077e-05C16.986 0.019056 18.5499 3.75408 17.8299 7.46508Z"
        scale={0.5}
        x={10.5}
        y={9}
      />
    </Svg>
  );
}
