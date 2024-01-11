import React from "react";
import { Path, Svg, Circle } from "react-native-svg";

const Plus = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 60 60" fill="none">
    <Circle cx="30" cy="30" r="30" fill="#22215B" />
    <Path
      d="M24 30H36M30 36V24"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default Plus;
