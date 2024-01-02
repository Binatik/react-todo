import { HTMLAttributes } from "react";
import { INewTask } from "../newTaskForm/newTaskForm.types";

export type ITodo = {
  tasks: Array<INewTask>
  cb:  React.Dispatch<React.SetStateAction<INewTask[]>>
} & HTMLAttributes<HTMLElement>