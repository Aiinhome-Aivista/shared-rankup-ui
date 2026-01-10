export type ThemeMode = "light" | "dark" | "custom";

export type Theme = {
  colors: {
    bg: {
      primary: string;
      primaryDimmed: string;
      primaryDimmed25: string;
      secondary: string;
      sidebar: string;
      button: {
        secondary: string;
        tertiary: string;
      };
      surface: {
        primary: string;
        secondary: string;
        tertiary: string; // for notifications
        brand: string; // for brand colored surfaces like ai/announcement
        brandSecondary: string;
        neutral: string;
        warning: string;
      };
    };
    text: {
      primary: string;
      secondary: string;
      subtle: string;
      inverse: string;
      inverseSecondary: string;
      onPrimary: string;
      tertiary: string;
      brand: {
        secondary: string;
      };
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
      primary: string;
      secondary: string;
      subtle: string;
      focus: string;
    };
    shadow: {
      default: string;
      primary: string;
      innershadow: string;
    };
    hover: {
      default: string;
    };
    status: {
      error: {
        default: string;
        bg: string;
        subtle: string; // Text on bg
      };
      success: {
        default: string;
        bg: string;
      };
      warning: {
        default: string;
      };
    };
    viz: {
      primary: string; // charts
      secondary: string; // charts
    };
  };
};
