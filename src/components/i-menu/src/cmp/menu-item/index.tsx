import React, { useContext } from 'react'
import { highlight, isDisabled, defaultMenuItemStyle,verticalHighlight } from '../../style'
import { IMenuItemProps } from '../../type'
import { MenusContext } from '../menu'
const IMenuItem: React.FC<IMenuItemProps> = props => {
  const { index, className, disabled = false, style, children } = props
  const is = disabled && isDisabled['disabled']
  const context = useContext(MenusContext)
  const isActive = context.index === index
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li
      className={`${className} ${is} ${
        isActive ? highlight : ''
      } ${defaultMenuItemStyle} ${(context.mode === 'vertical' && isActive) ? verticalHighlight : ''}`}
      onClick={handleClick}
      style={style}
    >
      {children}
    </li>
  )
}
IMenuItem.displayName = 'IMenuItem'

export default IMenuItem
