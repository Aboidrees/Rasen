import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BookmarkCheck({
                                          size = 30, color = 'black', ...otherProps
                                      }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={'0 0 16 16'}
            fill="none"
            {...otherProps}>

            <Path
                d="M5.6 2.3999H10.4C10.8243 2.3999 11.2313 2.5474 11.5314 2.80995C11.8314 3.0725 12 3.4286 12 3.7999V10.291C12 11.77 12 12.5095 11.5173 12.8013C11.0346 13.0931 10.3798 12.7493 9.07033 12.0618L8.92967 11.988C8.47425 11.7489 8.24654 11.6293 8 11.6293C7.75346 11.6293 7.52575 11.7489 7.07033 11.988L6.92967 12.0618C5.62018 12.7493 4.96543 13.0931 4.48272 12.8013C4 12.5095 4 11.77 4 10.291V3.7999C4 3.4286 4.16857 3.0725 4.46863 2.80995C4.76869 2.5474 5.17565 2.3999 5.6 2.3999Z"
                fill={color}
                stroke={color}
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M6.3999 7.2L7.5999 8.4L9.5999 6"
                stroke="#F5F5F8"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />


        </Svg>
    );
}
