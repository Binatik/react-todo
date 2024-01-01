import { HTMLAttributes } from "react";
import { INewTask } from "../newTaskForm/newTaskForm.types";

export type ITodo = {
  tasks: Array<INewTask> | undefined
  cb:  React.Dispatch<React.SetStateAction<INewTask[] | undefined>>
} & HTMLAttributes<HTMLElement>