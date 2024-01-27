import { HTMLAttributes } from "react";

export type ITimerProps = {
  mode: 'primary'
  deadline: Date;
  startDeadline?: Date
} & HTMLAttributes<HTMLDivElement>;