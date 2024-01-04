import { HTMLAttributes } from "react";
import { ITask } from "../../module/todo/newTaskForm/newTaskForm.types";

export type IHeaderProps = {
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
} & HTMLAttributes<HTMLElement>;
