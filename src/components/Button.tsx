// src/Button.tsx
import { useTheme } from "../theme/ThemeProvider";
import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
};

export const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        background: theme.colors.bg.buttonBg,
        color: theme.colors.text.default,
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
};
