import { HTMLAttributes } from "react"
import { ITask } from "../newTaskForm/newTaskForm.types"

export type ITasksFilter = {
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>
  counter: number
} & HTMLAttributes<HTMLElement>