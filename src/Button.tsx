import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        background: "#2563eb",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
};
