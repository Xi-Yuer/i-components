import React, { createContext, useState } from 'react'
import { modeStyle, defaultMenuStyle } from '../../style'
import { IMenuContext, IMenuProps, IMenuItemProps } from '../../type'

export const MenusContext = createContext<IMenuContext>({
  index: 0,
})

const IMenu: React.FC<IMenuProps> = props => {
  const {
    defaultIndex = 0,
    mode = 'horizontal',
    className,
    style,
    onSelect,
    children,
  } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode,
  }

  // 检测 子节点是否是 IMenuItem 组件 如果不是则抛出错误
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'IMenuItem') {
        return React.cloneElement(childElement, {
          index,
        })
      } else {
        console.error('Warning: IMenu has a child which is not IMenuItem')
      }
    })
  }
  return (
    <ul
      className={`${className} ${modeStyle[mode]} ${defaultMenuStyle}`}
      style={style}
      data-testid='menu-test'
    >
      <MenusContext.Provider value={passedContext}>
        {renderChildren()}
      </MenusContext.Provider>
    </ul>
  )
}


export default IMenu
