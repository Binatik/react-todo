import { InputHTMLAttributes } from "react";

export type ITimerInputProps = {
  mode: "primary" | "edit";
  wide?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
