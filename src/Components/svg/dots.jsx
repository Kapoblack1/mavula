import React from "react";
import { Svg, Circle } from "react-native-svg";

const Dots = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 23 5" fill="none">
    <Circle cx="2.5" cy="2.5" r="2.5" fill="#767676" />
    <Circle cx="11.5" cy="2.5" r="2.5" fill="#767676" />
    <Circle cx="20.5" cy="2.5" r="2.5" fill="#767676" />
  </Svg>
);
export default Dots;
