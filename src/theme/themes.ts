import type { Theme } from "./types";
import { palette } from "./colors";

export const lightTheme: Theme = {
  colors: {
    bg: {
      primary: palette.common.white,
      primaryDimmed: palette.common.whiteSmoke,
      primaryDimmed25: palette.transparentWhite[25],
      secondary: palette.neutral[50], // Generic secondary bg
      sidebar: palette.common.blue_primary,
      button: {
        secondary: palette.green[800],
        tertiary: palette.common.green_primary, // notificationBg
      },
      surface: {
        primary: palette.neutral[850], // card
        secondary: palette.neutral[800], // upcomingSectionSmallCardBg
        tertiary: palette.neutral[300], // notificationBg
        brand: palette.purple[900], // aiassistanceSectionCardBg
        brandSecondary: palette.purple[950], // announcementSectionBg
        neutral: palette.neutral[850], // calendernormaltextBg
        warning: palette.yellow[800],
      },
    },
    text: {
      primary: palette.common.blue_primary, // was brand.primary
      secondary: palette.common.blue_tertiary, // muted
      subtle: palette.purple[300], // was primary
      inverse: palette.purple[400],
      inverseSecondary: palette.yellow[800],
      onPrimary: palette.common.white, // buttonText
      tertiary: palette.common.green_primary, // notificationTextPrimaryBg
      brand: {
        secondary: palette.purple[500], // sidebaricontext
      },
    },
    action: {
      primary: {
        default: palette.common.blue_primary, // buttonBg
        hover: palette.purple[600],
        active: palette.purple[700],
        disabled: palette.purple[300],
      },
      secondary: {
        default: palette.purple[50],
        hover: palette.purple[100],
        active: palette.purple[200],
      },
    },
    border: {
      default: palette.neutral[600],
      primary: palette.common.white,
      secondary: palette.neutral[650],
      subtle: palette.neutral[300],
      focus: palette.common.blue_tertiary,
    },
    shadow: {
      default: palette.purple[650],
      primary: palette.black[700],
      innershadow: palette.neutral[650],
    },
    hover: {
      default: palette.neutral[150],
    },
    status: {
      error: {
        default: palette.common.red, // notificationTextPrimaryBg
        bg: palette.common.red[800], // calenderHolidayBg
        subtle: palette.common.red, // calenderHolidayText
      },
      success: {
        default: palette.green.success,
        bg: palette.green.successBg,
      },
      warning: {
        default: palette.yellow[300], // notificationTextSecondaryBg
      },
    },
    viz: {
      primary: palette.common.blue_primary, // barchartbarfillBg
      secondary: palette.neutral[450], // radialChartBg
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    bg: {
      primary: palette.common.green,
      secondary: palette.common.green, // Adjust if needed
      sidebar: palette.green[900],
      button: {
        secondary: palette.neutral[800], // upcomingSectionSmallCardBg
        tertiary: palette.green[850], // notificationBg
      },
      surface: {
        primary: palette.green[750], // card
        secondary: palette.green[850], // upcomingSectionSmallCardBg (same as card in dark?)
        tertiary: palette.green[850], // notificationBg
        brand: palette.green[900], // aiassistance
        brandSecondary: palette.green[900], // announcement
        neutral: palette.green[900], // calendernormaltextBg
      },
    },
    text: {
      primary: palette.common.white, // was brand.primary
      secondary: palette.green[500],
      subtle: palette.common.white, // was primary
      inverse: palette.common.white,
      onPrimary: palette.common.green,
      tertiary: palette.common.green_primary,
      brand: {
        secondary: palette.neutral[300], // sidebaricontext
      },
    },
    action: {
      primary: {
        default: palette.green[600], // buttonBg
        hover: palette.green[500],
        active: palette.green[600],
        disabled: palette.green[900],
      },
      secondary: {
        default: palette.green[800],
        hover: palette.green[700],
        active: palette.green[700],
      },
    },
    border: {
      default: palette.green[700],
      primary: palette.green[850],
      secondary: palette.green[800],
      subtle: palette.green[700],
      focus: palette.green[400],
    },
    shadow: {
      default: palette.common.black_secondary,
      primary: palette.common.black_secondary,
      innershadow: palette.common.black_secondary,
    },
    hover: {
      default: palette.green[700],
    },
    status: {
      error: {
        default: palette.common.red,
        bg: palette.red[800],
        subtle: palette.common.red,
      },
      success: {
        default: palette.green[400],
        bg: palette.green.successBgDark,
      },
      warning: {
        default: palette.yellow[300],
      },
    },
    viz: {
      primary: palette.green[500],
      secondary: palette.green[850],
    },
  },
};

export const customTheme: Theme = lightTheme;
