import React from 'react'
import {
  IButtonSize,
  IButtonType,
  IButtonDisabled,
} from '../style/index'
import { ButtonProps } from '../type/index'

const IButton: React.FC<ButtonProps> = props => {
  const {
    className,
    disabled = false,
    size = 'default',
    btnType = 'default',
    render,
    children,
    ...restProps
  } = props
  return (
    <button
      className={`${IButtonType[btnType]} ${className} ${IButtonSize[size]} ${
        disabled ? IButtonDisabled['allowed'] : IButtonDisabled['pointer']
      } ${IButtonSize[size]} relative`}
      {...restProps}
    >
      <div className='flex justify-center items-center'>
        {render ? render() : children}
      </div>
    </button>
  )
}

export default IButton
