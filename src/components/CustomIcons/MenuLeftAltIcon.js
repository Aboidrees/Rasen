import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function MenuLeftAltIcon({
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
      <Path d="M20 8.75H3.75C3.06 8.75 2.5 8.19 2.5 7.5C2.5 6.81 3.06 6.25 3.75 6.25H20C20.69 6.25 21.25 6.81 21.25 7.5C21.25 8.19 20.69 8.75 20 8.75ZM27.5 15C27.5 14.31 26.94 13.75 26.25 13.75H3.75C3.06 13.75 2.5 14.31 2.5 15C2.5 15.69 3.06 16.25 3.75 16.25H26.25C26.94 16.25 27.5 15.69 27.5 15ZM16.25 22.5C16.25 21.81 15.69 21.25 15 21.25H3.75C3.06 21.25 2.5 21.81 2.5 22.5C2.5 23.19 3.06 23.75 3.75 23.75H15C15.69 23.75 16.25 23.19 16.25 22.5Z" />
    </Svg>
  );
}
