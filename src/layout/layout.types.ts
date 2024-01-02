import { INewTask } from "../module/todo/newTaskForm/newTaskForm.types"

export type ILayout = {
  cb: React.Dispatch<React.SetStateAction<INewTask[]>>
  children: React.ReactNode
}