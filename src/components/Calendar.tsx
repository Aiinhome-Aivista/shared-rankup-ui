import React, { useState, ReactNode } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { ArrowBackward } from "../icons/ArrowBackward";
import { ArrowForward } from "../icons/ArrowForward";

export type CalendarProps = {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  backgroundColor?: string;
  textColor?: string;
  holidayTextColor?: string;
  holidayBgColor?: string;
  selectedBgColor?: string;
  selectedTextColor?: string;
  iconColor?: string;
  iconSize?: number;
  headerFontSize?: string | number;
};

export const Calendar = ({
  width = 350,
  children,
  height = "auto",
  initialDate = new Date(),
  onDateSelect,
  backgroundColor,
  textColor,
  holidayTextColor,
  holidayBgColor,
  selectedBgColor,
  selectedTextColor,
  iconColor,
  iconSize = 18,
  headerFontSize = "15px",
}: CalendarProps) => {
  const { theme } = useTheme();

  // viewDate controls which month is being displayed
  const [viewDate, setViewDate] = useState(initialDate);
  // selectedDate tracks the specific day
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthName = viewDate.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Logic to determine the first day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // Adjust so Monday is the first day (matching your dayLabels)
  const shiftIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingSlots = Array.from({ length: shiftIndex }, (_, i) => i);
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  // Navigation handlers
  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isSameDay = (day: number) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    if (onDateSelect) onDateSelect(newDate);
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor || theme.colors.bg.default,
        padding: "24px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Navigation Arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: textColor || theme.colors.text.default,
            fontWeight: 700,
            fontSize: headerFontSize,
          }}
        >
          {monthName} {year}
        </span>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div
            onClick={handlePrevMonth}
            style={{ cursor: "pointer", display: "flex" }}
          >
            <div style={{ pointerEvents: "none", display: "flex" }}>
              <ArrowBackward
                width={iconSize}
                height={iconSize}
                color={iconColor || theme.colors.text.primary}
              />
            </div>
          </div>
          <div
            onClick={handleNextMonth}
            style={{ cursor: "pointer", display: "flex" }}
          >
            <div style={{ pointerEvents: "none", display: "flex" }}>
              <ArrowForward
                width={iconSize}
                height={iconSize}
                color={iconColor || theme.colors.text.primary}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
        }}
      >
        {/* Weekday Labels */}
        {dayLabels.map((label, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 600,
              // Sunday (index 6) gets the holiday color
              color:
                i === 6
                  ? holidayTextColor || theme.colors.text.calenderHolidayText
                  : theme.colors.text.muted,
              paddingBottom: "8px",
            }}
          >
            {label}
          </div>
        ))}

        {/* Empty slots for month alignment */}
        {paddingSlots.map((i) => (
          <div key={`pad-${i}`} />
        ))}

        {/* Calendar Days */}
        {daysArray.map((day) => {
          const dateObj = new Date(year, month, day);
          const isSunday = dateObj.getDay() === 0;
          const isSelected = isSameDay(day);

          const dayBg = isSelected
            ? selectedBgColor || theme.colors.bg.buttonBg
            : isSunday
            ? holidayBgColor || theme.colors.bg.calenderHolidayBg
            : theme.colors.bg.calendernormaltextBg;

          const dayColor = isSelected
            ? selectedTextColor || theme.colors.text.onPrimary
            : isSunday
            ? holidayTextColor || theme.colors.text.calenderHolidayText
            : textColor || theme.colors.text.calenderText;

          return (
            <div
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: 500,
                backgroundColor: dayBg,
                color: dayColor,
              }}
            >
              {day}
            </div>
          );
        })}
        {children}
      </div>
    </div>
  );
};
