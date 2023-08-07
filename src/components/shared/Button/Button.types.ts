import { ButtonHTMLAttributes } from "react"

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string
    buttonType: 1 | 2 | 3 | 4
}