import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export default function StableIcon({
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
      <G clip-Path="url(#clip0_822_13677)">
        <Path
          d="M4.90359 17.5819H4.14891V17.3724C4.14891 16.2385 4.14281 15.1041 4.15359 13.9697C4.15641 13.6852 4.07203 13.4574 3.87234 13.2628C3.61734 13.0144 3.35672 12.7697 3.11344 12.5105C3.05456 12.4344 3.02346 12.3404 3.02531 12.2442C3.01922 11.6011 3.02531 10.958 3.02531 10.3149V10.11H1.17188C1.20328 10.0491 1.22109 10.0078 1.24453 9.9694C2.06234 8.68253 2.88172 7.39675 3.70266 6.11206C3.75249 6.03565 3.82306 5.975 3.90609 5.93721C5.30484 5.3494 6.70687 4.76862 8.10609 4.18128C8.1579 4.15708 8.21438 4.14453 8.27156 4.14453C8.32874 4.14453 8.38523 4.15708 8.43703 4.18128C9.84328 4.76956 11.2495 5.35315 12.6558 5.94237C12.7383 5.97706 12.8091 6.06612 12.8602 6.14628C13.6527 7.38784 14.4431 8.62987 15.2316 9.87237C15.2747 9.94034 15.3164 10.0088 15.3722 10.0974H13.5089V10.2942C13.5089 10.9552 13.5089 11.6157 13.5089 12.2766C13.5126 12.3267 13.5045 12.3771 13.4853 12.4235C13.4661 12.47 13.4363 12.5113 13.3983 12.5442C13.1109 12.8096 12.8358 13.0903 12.562 13.3697C12.3961 13.5385 12.3919 13.763 12.3909 13.9791C12.3862 15.1041 12.3909 16.2244 12.3881 17.3466V17.5786H11.6433C11.6433 17.5074 11.6433 17.4347 11.6433 17.3621C11.6452 15.5264 11.6467 13.6906 11.648 11.8547C11.648 11.6391 11.6334 11.4225 11.6156 11.2074C11.595 10.951 11.5181 10.8746 11.2645 10.8689C10.8028 10.8591 10.3411 10.8553 9.87937 10.8544C8.38844 10.8519 6.89766 10.8508 5.40703 10.8511C5.02641 10.8511 4.91484 10.9603 4.91437 11.34C4.91125 13.3453 4.90844 15.3507 4.90594 17.356L4.90359 17.5819ZM9.76172 7.50378C9.76513 7.30763 9.72964 7.11274 9.65731 6.93039C9.58497 6.74803 9.47722 6.58181 9.34027 6.44134C9.20333 6.30087 9.03991 6.18892 8.85945 6.11197C8.679 6.03501 8.48508 5.99458 8.28891 5.993C8.09287 5.98958 7.89808 6.02485 7.71569 6.09679C7.53329 6.16872 7.36687 6.27592 7.22594 6.41223C7.08501 6.54854 6.97234 6.71131 6.89438 6.8912C6.81641 7.0711 6.77467 7.26461 6.77156 7.46065C6.76078 8.28612 7.42219 8.97237 8.23781 8.98268C8.43543 8.98704 8.63193 8.95206 8.81591 8.87978C8.99988 8.8075 9.16765 8.69937 9.30945 8.56166C9.45125 8.42396 9.56426 8.25944 9.6419 8.07767C9.71955 7.89589 9.76027 7.7005 9.76172 7.50284V7.50378Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M15.3853 5.42731C15.3801 5.35278 15.3726 5.29137 15.3726 5.22996C15.3726 4.76121 15.3755 4.29246 15.3759 3.82699C15.3759 3.54153 15.2381 3.37137 15.0084 3.36949C14.7787 3.36762 14.6334 3.54152 14.6334 3.82043C14.6334 4.09934 14.6334 4.38293 14.6334 4.70824C14.5275 4.60324 14.4492 4.52074 14.3686 4.44574C14.1876 4.2709 13.964 4.25825 13.8089 4.41434C13.6537 4.57043 13.6575 4.78934 13.8375 4.97356C14.0719 5.21075 14.3105 5.44231 14.5434 5.6809C14.5884 5.72301 14.6179 5.77895 14.6273 5.83981C14.6334 6.38215 14.6311 6.92403 14.6311 7.5109C14.5781 7.43731 14.5476 7.39934 14.5219 7.35809C14.22 6.87856 13.9078 6.40512 13.6209 5.91668C13.395 5.53184 13.1119 5.23418 12.6637 5.132C12.4762 5.08887 12.4139 4.98668 12.4026 4.79262C12.3384 3.67559 12.5269 2.61668 13.0842 1.637C13.2637 1.31387 13.5061 1.02999 13.7972 0.802152C14.5317 0.234964 15.4439 0.228401 16.1798 0.792307C16.7981 1.26621 17.1614 1.91402 17.3761 2.64574C17.7834 4.03324 17.7173 5.39449 17.0756 6.70418C16.8065 7.25449 16.4259 7.71809 15.8709 8.00918C15.7247 8.08559 15.5644 8.13528 15.3769 8.21075V7.41762C15.3769 7.16074 15.3703 6.902 15.3806 6.64653C15.3861 6.56814 15.4169 6.49364 15.4683 6.43418C15.6262 6.26215 15.7964 6.10278 15.9628 5.93731C16.1648 5.73387 16.1845 5.51824 16.0195 5.3509C15.8545 5.18356 15.6572 5.20278 15.449 5.39215C15.4288 5.40561 15.4075 5.41737 15.3853 5.42731Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M17.6098 17.5793H13.1309V17.4007C13.1309 16.2724 13.1309 15.1441 13.1355 14.0163C13.1409 13.9157 13.1799 13.8198 13.2462 13.744C13.4449 13.5241 13.661 13.3198 13.8959 13.084L14.6243 13.8687C14.8873 13.5968 15.1254 13.3502 15.3743 13.091L16.1243 13.857L16.8743 13.0962C17.1162 13.3409 17.3477 13.5701 17.5727 13.8059C17.6028 13.8464 17.6182 13.896 17.6163 13.9465C17.6182 15.134 17.6182 16.3207 17.6163 17.5066C17.6155 17.531 17.6134 17.5552 17.6098 17.5793Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M1.1604 13.097L1.90244 13.8564L2.64869 13.0938C2.899 13.3436 3.13572 13.5766 3.36681 13.8147C3.39278 13.8521 3.40518 13.8972 3.40197 13.9427C3.40197 15.1302 3.40197 16.3166 3.40197 17.5019C3.40013 17.5272 3.397 17.5524 3.39259 17.5773H0.413686V17.3838C0.413686 16.262 0.413686 15.1398 0.410873 14.0177C0.407446 13.9633 0.416332 13.9089 0.436867 13.8585C0.457402 13.8081 0.489056 13.763 0.529467 13.7266C0.741811 13.5273 0.941029 13.3169 1.1604 13.097Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M7.74156 14.5971L5.66406 17.0487V12.1465L7.74156 14.5971Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M6.1875 11.6152H10.3509L8.27063 14.0682L6.1875 11.6152Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M8.26945 15.125L10.347 17.5742H6.19336L8.26945 15.125Z"
          fill={color}
        />
        <Path
          opacity="0.4"
          d="M8.79688 14.5967L10.8744 12.1484V17.0436L8.79688 14.5967Z"
          fill={color}
        />
        <Path
          d="M15.369 10.8633V12.3473C15.0596 12.3516 14.8534 12.5433 14.6387 12.8067V10.8633H15.369Z"
          fill={color}
        />
        <Path
          d="M9.01719 7.48172C9.01735 7.67926 8.94 7.86898 8.80177 8.0101C8.66355 8.15122 8.47547 8.23248 8.27797 8.2364C8.07747 8.23641 7.88512 8.15702 7.74299 8.01559C7.60087 7.87417 7.52052 7.68222 7.51953 7.48172C7.52199 7.28418 7.602 7.09551 7.74231 6.95643C7.88262 6.81735 8.07197 6.739 8.26953 6.73828C8.46691 6.73889 8.65608 6.81728 8.79604 6.95645C8.936 7.09562 9.01546 7.28435 9.01719 7.48172Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_822_13677">
          <Rect width="18" height="18" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
