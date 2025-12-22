// src/theme/types.ts
export type ThemeMode = "light" | "dark" | "custom";

export type Theme = {
  colors: {
    bg: {
      default: string;
      surface: string;
      subtle: string;
      muted: string;
    };
    text: {
      default: string;
      muted: string;
      inverse: string;
      onPrimary: string;
    };
    action: {
      primary: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
      };
      secondary: {
        default: string;
        hover: string;
        active: string;
      };
    };
    border: {
      default: string;
      subtle: string;
      focus: string;
    };
    status: {
      error: {
        default: string;
        bg: string;
      };
      success: {
        default: string;
        bg: string;
      };
    };
  };
}