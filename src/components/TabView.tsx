// src/TabView.tsx
import { useState } from "react";
import { useTheme } from "./theme/ThemeProvider";
import type { ReactNode } from "react";

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export type TabViewProps = {
  tabs: Tab[];
  defaultActiveTabId?: string;
  color?: "primary" | "secondary" | "danger";
};

export const TabView = ({ tabs, defaultActiveTabId, color = "primary" }: TabViewProps) => {
  const { theme } = useTheme();
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId || tabs[0]?.id);

  const activeTab = tabs.find((t) => t.id === activeTabId);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", borderBottom: `1px solid ${theme.colors.secondary}` }}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${theme.colors[color]}` : "2px solid transparent",
                color: isActive ? theme.colors[color] : theme.colors.text,
                fontWeight: isActive ? "bold" : "normal",
                marginBottom: -1,
                transition: "all 0.2s ease-in-out",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div style={{ padding: "16px 0" }}>
        {activeTab?.content}
      </div>
    </div>
  );
};
