import { HTMLAttributes} from "react";

export type ITimerProps = {
  mode: 'primary'
  onPause: (timestamp: number) => void
  onResume: () => void
  onEnd: () => void
  pause: boolean
  duration: number;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onPause'>