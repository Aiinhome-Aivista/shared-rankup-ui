import type { Theme } from "./types"
import { palette } from "./colors";

export const lightTheme: Theme = {
  colors: {
    bg: {
      default: palette.neutral[50],
      surface: palette.common.white,
      subtle: palette.neutral[100],
      muted: palette.neutral[300],
    },
    text: {
      default: palette.neutral[900],
      muted: palette.neutral[600],
      inverse: palette.common.white,
      onPrimary: palette.common.white,
    },
    action: {
      primary: {
        default: palette.purple[500],
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
      default: palette.neutral[200],
      subtle: palette.neutral[100],
      focus: palette.purple[500],
    },
    status: {
      error: {
        default: palette.red[500],
        bg: palette.red[50],
      },
      success: {
        default: palette.green.success,
        bg: palette.green.successBg,
      },
    }
  }
};

export const darkTheme: Theme = {
  colors: {
    bg: {
      default: palette.green[900],
      surface: palette.green[850],
      subtle: palette.green[800],
      muted: palette.green[700],
    },
    text: {
      default: palette.common.white,
      muted: palette.neutral[500],
      inverse: palette.green[900],
      onPrimary: palette.common.black,
    },
    action: {
      primary: {
        default: palette.green[400],
        hover: palette.green[500],
        active: palette.green[600],
        disabled: palette.green[950],
      },
      secondary: {
        default: palette.green[800],
        hover: palette.green[700],
        active: palette.green[700], // Kept same as hover or slightly diff if needed
      },
    },
    border: {
      default: palette.green[700],
      subtle: palette.green[850],
      focus: palette.green[400],
    },
    status: {
      error: {
        default: palette.red[500],
        bg: palette.red[900],
      },
      success: {
        default: palette.green[400],
        bg: palette.green.successBgDark,
      },
    }
  }
};

export const customTheme = {
 
};