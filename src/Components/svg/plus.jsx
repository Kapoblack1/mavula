import React from "react";
import { Path, Svg } from "react-native-svg";

const Plus = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 12H18M12 18V6"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default Plus;