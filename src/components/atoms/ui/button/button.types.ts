import { ReactNode } from "react";

export type TButton = {
  children: ReactNode;
  className?: string;
  withIcon?: boolean;
  onClick?: () => void;
  color?: "primary" | "white" | "black" | "transparent";
};
