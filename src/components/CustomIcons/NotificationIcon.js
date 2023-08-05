import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export default function NotificationIcon({
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
      fill="none"
      {...otherProps}>
      <Path
        d="M21.0401 9.30662C20.1593 7.98541 18.9355 6.92878 17.5 6.25L15.0001 5.25024L12.5 6.25C11.0645 6.92878 9.84075 7.98541 8.95994 9.30662C8.07913 10.6278 7.57445 12.1638 7.5 13.75V17.5C7.40593 18.2771 7.13071 19.0213 6.69648 19.6727C6.26226 20.324 5.68117 20.8643 5 21.25H25C24.3188 20.8643 23.7377 20.324 23.3035 19.6727C22.8693 19.0213 22.5941 18.2771 22.5 17.5V13.75C22.4255 12.1638 21.9209 10.6278 21.0401 9.30662Z"
        fill={color}
        opacity={0.4}
        stroke={color}
        strokeOpacity={1}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.25 21.25V22.5C11.25 23.4946 11.6451 24.4484 12.3483 25.1517C13.0516 25.8549 14.0054 26.25 15 26.25C15.9946 26.25 16.9484 25.8549 17.6517 25.1517C18.3549 24.4484 18.75 23.4946 18.75 22.5V21.25"
        fill={color}
        opacity={0.4}
        stroke={color}
        strokeOpacity={1}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="20.25"
        cy="6.75"
        r="4.5"
        fill={color}
        stroke="white"
        strokeOpacity={0.4}
        strokeWidth={2}
      />
    </Svg>
  );
}
