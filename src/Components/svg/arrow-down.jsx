import React from "react";
import { Svg, Path } from "react-native-svg";

const ArrowDown = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19.92 8.99997L13.4 15.52C12.63 16.29 11.37 16.29 10.6 15.52L4.07996 8.99997"
      stroke="black"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default ArrowDown;
