// src/theme/types.ts
export type ThemeMode = "light" | "dark" | "custom";

export type Theme = {
  colors: {
    bg: {
      default: string;
      card: string;
      calenderHolidayBg: string;
      calendernormaltextBg: string;
      notificationBg: string;
      sidebarBg: string;
      barchartbarfillBg: string;
      radialChartBg: string;
      buttonBg: string;
      notificationTextPrimaryBg: string;
      notificationTextSecondaryBg: string;
      announcementSectionBg: string;
      upcomingSectionSmallCardBg: string;
      aiassistanceSectionCardBg: string;
    };
    text: {
      default: string;
      muted: string;
      inverse: string;
      onPrimary: string;
      calenderHolidayText: string;
      calenderText: string;
      primary: string;
      notificationiconText: string;
      sidebaricontext: string;
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
      };
      success: {
        default: string;
        bg: string;
      };
    };
  };
}