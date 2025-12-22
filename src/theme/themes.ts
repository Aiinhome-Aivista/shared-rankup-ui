import type { Theme } from "./types"
import { palette } from "./colors";

export const lightTheme: Theme = {
  colors: {
    bg: {
      default: palette.common.white,
      card: palette.neutral[850],
      calenderHolidayBg: palette.common.red[800],
      calendernormaltextBg: palette.neutral[850],
      notificationBg: palette.neutral[300],
      notificationTextPrimaryBg: palette.common.red,
      notificationTextSecondaryBg: palette.yellow[300],
      sidebarBg: palette.common.blue_primary,
      barchartbarfillBg: palette.common.blue_primary,
      radialChartBg: palette.neutral[450],
      buttonBg: palette.common.blue_primary,
      announcementSectionBg: palette.purple[950],
      upcomingSectionSmallCardBg: palette.neutral[800],
      aiassistanceSectionCardBg: palette.purple[900],

    },
    text: {
      default: palette.common.blue_primary,
      muted: palette.common.blue_tertiary,
      inverse: palette.purple[400],
      primary: palette.purple[300],
      sidebaricontext: palette.purple[500],
      onPrimary: palette.common.white,
      calenderText: palette.purple[300],
      notificationiconText: palette.common.black_secondary,
      calenderHolidayText: palette.common.red,
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
      default: palette.neutral[600],
      primary: palette.common.white,
      secondary: palette.neutral[650],
      subtle: palette.neutral[300],
      focus: palette.common.blue_tertiary,
    },
    shadow:{
      default:palette.purple[650],
      primary: palette.black[700],
      innershadow: palette.neutral[650],
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
      default: palette.common.green,
      card: palette.green[850],
      calenderHolidayBg: palette.red[800],
      calendernormaltextBg: palette.green[900],
      notificationBg: palette.green[850],
      sidebarBg: palette.green[900],
      barchartbarfillBg: palette.green[500],
      radialChartBg: palette.green[850],
      buttonBg: palette.green[600],
      notificationTextPrimaryBg: palette.common.red,
      notificationTextSecondaryBg: palette.yellow[300],
      announcementSectionBg: palette.green[900],
      upcomingSectionSmallCardBg: palette.green[850],
      aiassistanceSectionCardBg: palette.green[900],
    },
    text: {
      default: palette.common.white,
      muted: palette.green[500],
      inverse: palette.common.white,
      primary: palette.common.white,
      notificationiconText: palette.green[400],
      onPrimary: palette.common.green,
      calenderHolidayText: palette.common.red,
      calenderText: palette.common.white,
      sidebaricontext: palette.neutral[300],
     
    },
    action: {
      primary: {
        default: palette.green[400],
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
    shadow:{
      default:palette.common.black_secondary,
      primary: palette.common.black_secondary,
      innershadow: palette.common.black_secondary,

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