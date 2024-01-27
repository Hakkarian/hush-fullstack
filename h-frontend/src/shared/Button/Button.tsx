import React, { FC, HTMLAttributes } from 'react'
import { ButtonCss } from './Button.styled'

// utility function: merge tailwind classes
interface IButton extends HTMLAttributes<HTMLButtonElement> {
  text: string,
  disabled: boolean
}

const Button: FC<IButton> = ({text = "", disabled, ...styles}) => {
  return (
    <ButtonCss type='button' {...styles} disabled >
          {text}
    </ButtonCss>
  )
}

export default Button