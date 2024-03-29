import { InputHTMLAttributes } from "react";

export type IInputProps = {
  mode: "primary" | "edit";
  wide?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
