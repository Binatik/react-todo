import { HTMLAttributes } from "react";

export type ITimerProps = {
  mode: 'primary'
  lastDeadline: Date;
  startDeadline: Date;

  //Стейт который требуется для обновления state из вне. ::Date
  setUpdateDeadline: React.Dispatch<React.SetStateAction<Date>>
} & HTMLAttributes<HTMLDivElement>;