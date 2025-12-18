// src/theme/ThemeProvider.tsx
import { createContext, useContext, ReactNode, useState } from "react";
import { lightTheme, darkTheme, customTheme } from "./themes";
import type { Theme, ThemeMode } from "./types";

type ThemeContextType = {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  mode: "light",
  setMode: () => {}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const theme = mode === "dark" ? darkTheme : mode === "custom" ? customTheme : lightTheme;

  return <ThemeContext.Provider value={{ theme, mode, setMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
