import React from "react";
import { Path, Svg } from "react-native-svg";

const Times = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 49 49" fill="none">
    <Path
      d="M18.0441 30.0736L30.0736 18.0441M30.0736 30.0736L18.0441 18.0441"
      stroke="#567DF4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default Times;
