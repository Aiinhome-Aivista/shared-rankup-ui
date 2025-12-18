// src/theme/types.ts
export type ThemeMode = "light" | "dark" | "custom";

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
    text: string;
    background: string;
  };
};
