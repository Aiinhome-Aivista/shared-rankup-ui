import { useTheme } from "../theme/ThemeProvider";

export type ArrowBackIconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  onClick?: () => void;
};

export const ArrowBack = ({
  width = 15,
  height = 15,
  color,
  onClick,
}: ArrowBackIconProps) => {
  const { theme } = useTheme();

  const iconColor = color || theme.colors.text.default;
  const leftPath =
    "M2.21875 7.50025L6.8125 12.094C6.96875 12.2503 7.04427 12.4325 7.03906 12.6409C7.03385 12.8492 6.95312 13.0315 6.79688 13.1878C6.64062 13.344 6.45833 13.4221 6.25 13.4221C6.04167 13.4221 5.85938 13.344 5.70312 13.1878L0.890625 8.39088C0.765625 8.26588 0.671875 8.12525 0.609375 7.969C0.546875 7.81275 0.515625 7.6565 0.515625 7.50025C0.515625 7.344 0.546875 7.18775 0.609375 7.0315C0.671875 6.87525 0.765625 6.73463 0.890625 6.60963L5.70312 1.79713C5.85938 1.64088 6.04427 1.56536 6.25781 1.57056C6.47135 1.57577 6.65625 1.6565 6.8125 1.81275C6.96875 1.969 7.04688 2.15129 7.04688 2.35963C7.04688 2.56796 6.96875 2.75025 6.8125 2.9065L2.21875 7.50025Z";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <mask
        id="icon_mask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill={iconColor} />
      </mask>
      <g mask="url(#icon_mask)">
        <path d={leftPath} fill={iconColor} />
      </g>
    </svg>
  );
};
