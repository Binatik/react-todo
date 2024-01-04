import { HTMLAttributes } from "react";

export type IList = {
  children: React.ReactNode;
  mode: "primary";
} & HTMLAttributes<HTMLElement>;
