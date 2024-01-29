import { HTMLAttributes } from "react";

export type ITimerProps = {
  mode: "primary";
  onPause: (timestamp: number) => void; //Действие при паузе
  onResume: () => void; //Действие при запуске
  onEnd: () => void; //Действие когда таймер достиг дедлайна.
  pause: boolean;
  duration: number;
} & Omit<HTMLAttributes<HTMLDivElement>, "onPause">;
