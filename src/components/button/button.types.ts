import { ButtonHTMLAttributes } from "react"

export type IButtonEdit = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'primary'
  size: 'md'
}

export type IButtonDelete = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'primary'
  size: 'md'
}