import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default function Eye({
  size = 18,
  color = "black",
  checked = false,
  ...otherProps
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width={size}
      height={size}
      fill={checked ? color : "none"}
      {...otherProps}
    >
      <Rect width="25" height="25" rx="7" fill={checked ? color : "white"} />
      <Path
        d="M9.1665 12.7344L11.8032 15.4687L16.1978 10"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
