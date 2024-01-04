import { ITask } from "../module/todo/newTaskForm/newTaskForm.types";

export type ILayoutProps = {
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  children: React.ReactNode;
};
