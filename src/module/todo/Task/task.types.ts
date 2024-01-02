import { HTMLAttributes } from "react";
import { ITask } from "../newTaskForm/newTaskForm.types";

export type ITaskProps = {
  task: ITask
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>
} & HTMLAttributes<HTMLElement>