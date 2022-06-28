import React from 'react'
import {
  IButtonSize,
  IButtonType,
  IButtonDisabled,
  IButtonRound,
} from '../style/index'
import { ButtonProps } from '../type/index'

const IButton: React.FC<ButtonProps> = props => {
  const {
    className,
    disabled,
    size = 'default',
    btnType = 'primary',
    render,
    children,
    round = false,
    ...restProps
  } = props

  const isDisabled = disabled
    ? IButtonDisabled['allowed']
    : IButtonDisabled['pointer']
  const isRound = round ? IButtonRound['round'] : ''
  return (
    <button
      className={`${IButtonType[btnType]} ${className} ${IButtonSize[size]} ${isDisabled} ${IButtonSize[size]} ${isRound}`}
      {...restProps}
    >
      {render ? render(props) : children}
    </button>
  )
}

export default IButton
