import { HTMLAttributes } from "react";
import { ITask } from "../newTaskForm/newTaskForm.types";

export type ITodoProps = {
  tasks: Array<ITask>;
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
} & HTMLAttributes<HTMLElement>;
