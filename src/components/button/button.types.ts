import { ButtonHTMLAttributes } from "react"

export type IButton ={
  mode: 'primary' | 'inline' | 'selected'
  size: 'md'
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export type IButtonEdit ={
  mode: 'primary'
  size: 'md'
} & ButtonHTMLAttributes<HTMLButtonElement>

export type IButtonDelete = {
  mode: 'primary'
  size: 'md'
} & ButtonHTMLAttributes<HTMLButtonElement>