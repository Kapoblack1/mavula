import React from "react";
import { Path, Svg, Circle } from "react-native-svg";

const Cancel = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 60 60" fill="none">
    <Circle cx="30" cy="30" r="30" fill="#D92D2D" />
    <Path
      d="M25.7574 34.2426L34.2426 25.7574M34.2426 34.2426L25.7574 25.7574"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default Cancel;
