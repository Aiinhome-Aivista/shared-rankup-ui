import type { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        background: "#fff"
      }}
    >
      {children}
    </div>
  );
};
