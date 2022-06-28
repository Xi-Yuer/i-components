/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { IMenu, IMenuItem, IMenuProps } from '../../index'

const testProps: IMenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
}

const testVerticalProps: IMenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

const generateMenu = (props: JSX.IntrinsicAttributes & IMenuProps) => {
  return (
    <IMenu {...props}>
      <IMenuItem index={0}>active</IMenuItem>
      <IMenuItem disabled index={1}>
        disabled
      </IMenuItem>
      <IMenuItem index={2}>3</IMenuItem>
    </IMenu>
  )
}
let wrapper: RenderResult, menuElement: HTMLElement,activeElement: HTMLElement, disabledElement: HTMLElement
describe('I-Menu', () => {
    beforeEach(()=>{
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('menu-test')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
  it('should render correct Menu and MenuItem based default props', () => {
      expect(menuElement).toBeInTheDocument()
  })
  it('click items should change active and call the right callback', () => {
        fireEvent.click(activeElement)
        expect(testProps.onSelect).toHaveBeenCalledWith(0)
        fireEvent.click(disabledElement)
        expect(testProps.onSelect).not.toHaveBeenCalled()
  })
  it('should render vertical mode when mode is set to veryical', () => {
        wrapper.rerender(generateMenu(testVerticalProps))
        const menuStyle = wrapper.getByTestId('menu-test').classList
        expect(menuStyle.contains('vertical')).toBeTruthy()
  })
})
