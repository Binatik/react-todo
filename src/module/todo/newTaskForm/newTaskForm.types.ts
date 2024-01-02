import { InputHTMLAttributes } from "react";



export type INewTask = {
  id: string,
  todoName: string,
  isComplited: boolean,
  create: Date,
  status: 'edit' | 'none',
  filter: 'all' | 'active' | 'complited'
}

export type INewTaskForm = {
  cb: React.Dispatch<React.SetStateAction<INewTask[]>>
} & InputHTMLAttributes<HTMLInputElement>