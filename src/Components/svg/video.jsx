import React from "react";
import { Path, Svg, Circle } from "react-native-svg";

const Video = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 22 22" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.0507 6.91351H7.94934C4.85651 6.91351 3.30917 6.91351 2.44017 7.81826C1.57117 8.72301 1.77559 10.12 2.18534 12.9149L2.57217 15.5659C2.89301 17.7577 3.05342 18.854 3.87567 19.5103C4.69884 20.1667 5.91067 20.1667 8.33709 20.1667H13.6629C16.0884 20.1667 17.3021 20.1667 18.1243 19.5103C18.9466 18.854 19.107 17.7577 19.4278 15.5659L19.8147 12.9149C20.2244 10.12 20.4288 8.72301 19.5598 7.81826C18.6908 6.91351 17.1435 6.91351 14.0507 6.91351ZM13.3659 14.4778C13.8783 14.1607 13.8783 13.3393 13.3659 13.0222L10.2758 11.1063C9.77809 10.7974 9.16667 11.1989 9.16667 11.8342V15.6658C9.16667 16.3011 9.77809 16.7017 10.2758 16.3937L13.3659 14.4778Z"
      fill="#567DF4"
    />
    <Path
      opacity="0.4"
      d="M7.80083 1.83331H14.1992C14.4118 1.83331 14.575 1.83331 14.718 1.84706C15.7337 1.94698 16.5651 2.55748 16.918 3.37973H5.08109C5.43309 2.55748 6.2645 1.94698 7.28017 1.84706C7.42408 1.83331 7.58725 1.83331 7.80083 1.83331Z"
      fill="#567DF4"
    />
    <Path
      opacity="0.7"
      d="M5.78417 4.32941C4.51 4.32941 3.465 5.09941 3.11575 6.11966C3.10842 6.14094 3.10139 6.16234 3.09467 6.18382C3.4595 6.07382 3.839 6.00141 4.224 5.95191C5.214 5.82541 6.46617 5.82541 7.92 5.82541H14.2377C15.6915 5.82541 16.9427 5.82541 17.9337 5.95191C18.3158 5.99825 18.6935 6.07581 19.063 6.18382C19.0563 6.16233 19.0493 6.14094 19.0419 6.11966C18.6936 5.09849 17.6477 4.32941 16.3726 4.32941H5.78417Z"
      fill="#567DF4"
    />
  </Svg>
);
export default Video;