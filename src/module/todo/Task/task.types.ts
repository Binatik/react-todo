import { HTMLAttributes } from "react";
import { INewTask } from "../newTaskForm/newTaskForm.types";

export type ITask = {
  task: INewTask
  cb:  React.Dispatch<React.SetStateAction<INewTask[] | undefined>>
} & HTMLAttributes<HTMLElement>