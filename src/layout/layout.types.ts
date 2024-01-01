import { INewTask } from "../module/todo/newTaskForm/newTaskForm.types"

export type ILayout = {
  cb: React.Dispatch<React.SetStateAction<INewTask[] | undefined>>
  children: React.ReactNode
}