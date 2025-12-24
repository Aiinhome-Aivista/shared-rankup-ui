import { useTheme } from "../theme/ThemeProvider";

export type ArrowForwardProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  onClick?: () => void;
};

export const ArrowForward = ({
  width = 15,
  height = 15,
  color,
  onClick,
}: ArrowForwardProps) => {
  const { theme } = useTheme();
  const iconColor = color || theme.colors.text.default;

  const rightPath =
    "M9.04664 7.5L4.45289 2.90625C4.29664 2.75 4.22112 2.5651 4.22633 2.35156C4.23153 2.13802 4.31226 1.95312 4.46851 1.79688C4.62476 1.64062 4.80966 1.5625 5.0232 1.5625C5.23674 1.5625 5.42164 1.64062 5.57789 1.79688L10.3748 6.60938C10.4998 6.73438 10.5935 6.875 10.656 7.03125C10.7185 7.1875 10.7498 7.34375 10.7498 7.5C10.7498 7.65625 10.7185 7.8125 10.656 7.96875C10.5935 8.125 10.4998 8.26562 10.3748 8.39062L5.56226 13.2031C5.40601 13.3594 5.22372 13.4349 5.01539 13.4297C4.80706 13.4245 4.62476 13.3438 4.46851 13.1875C4.31226 13.0312 4.23414 12.8464 4.23414 12.6328C4.23414 12.4193 4.31226 12.2344 4.46851 12.0781L9.04664 7.5Z";

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
        <path d={rightPath} fill={iconColor} />
      </g>
    </svg>
  );
};
