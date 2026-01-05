import { CSSProperties } from "react";

export type IconTypes = {
  width?: number | string;
  height?: number | string;
  color?: number | string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
};
