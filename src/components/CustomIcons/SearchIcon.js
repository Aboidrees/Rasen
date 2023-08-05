import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function SearchIcon({
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
        d="M26.3469 26.3468C26.3297 26.364 26.3143 26.373 26.3012 26.3782C26.2873 26.3838 26.2704 26.3875 26.25 26.3875C26.2297 26.3875 26.2127 26.3838 26.1989 26.3782C26.1858 26.373 26.1704 26.364 26.1532 26.3468L21.2885 21.4822C21.3539 21.4185 21.4185 21.3539 21.4822 21.2885L26.3469 26.1532C26.3469 26.1532 26.3469 26.1532 26.3469 26.1532C26.3692 26.1755 26.3844 26.2087 26.3844 26.25C26.3844 26.2913 26.3692 26.3244 26.3469 26.3468Z"
        fill={color}
        stroke={color}
        strokeOpacity={1}
        strokeWidth={2}
      />
      <Path
        d="M22.95 13.75C22.95 18.831 18.831 22.95 13.75 22.95C8.66898 22.95 4.55 18.831 4.55 13.75C4.55 8.66898 8.66898 4.55 13.75 4.55C18.831 4.55 22.95 8.66898 22.95 13.75Z"
        fill={color}
        opacity={0.4}
        stroke={color}
        strokeOpacity={1}
        strokeWidth={2}
      />
    </Svg>
  );
}
