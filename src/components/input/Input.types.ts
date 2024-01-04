import { InputHTMLAttributes } from "react";

export type IInput = {
  mode: "primary" | "edit";
  wide?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
