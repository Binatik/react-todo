import { HTMLAttributes } from "react"

export type IList = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  mode?: 'primary'
}