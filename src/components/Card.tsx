import type { ReactNode } from "react";
import { useTheme } from "../theme/ThemeProvider";


export type CardProps = {
  children: ReactNode;
  height?: string;
  width?: string;
};


export const Card = ({ children }: { children: ReactNode , height?: string, width?: string}) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        background: theme.colors.bg.card,
        color: theme.colors.text.default,    
      }}
    >
      {children}
    </div>
  );
};
