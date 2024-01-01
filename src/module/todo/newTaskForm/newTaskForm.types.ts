import { InputHTMLAttributes } from "react";

export type INewTask = {
  id: string,
  todoName: string,
  isComplited: boolean
  create: Date
}

export type INewTaskForm = {
  cb: React.Dispatch<React.SetStateAction<INewTask[] | undefined>>
} & InputHTMLAttributes<HTMLInputElement>