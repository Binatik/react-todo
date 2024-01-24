import { InputHTMLAttributes } from "react";

export type ITimer = {
  seconds: number
  minutes: number
  hours: number
  days: number
}

export type ITask = {
  id: string;
  todoName: string;
  isComplited: boolean;
  create: Date;
  status: "edit" | "none";
  filter: "all" | "active" | "complited";
};

export type INewTaskFormProps = {
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
} & InputHTMLAttributes<HTMLInputElement>;
