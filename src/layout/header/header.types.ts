import { HTMLAttributes } from "react";
import { INewTask } from "../../module/todo/newTaskForm/newTaskForm.types";

export type IHeader = {
  cb:  React.Dispatch<React.SetStateAction<INewTask[]>>
} & HTMLAttributes<HTMLElement>