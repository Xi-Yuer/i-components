/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react'
import { render } from '@testing-library/react'
import Button from '../cmp/index'

test('button test', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
  // 判断组件是否在文档中
  expect(element).toBeInTheDocument()
})

// 测试分类
describe('test Button componnet', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('inline-flex')
  })
  it('should render the correct primary button', () => {})

  it('should render the correct warning button', () => {})

  it('should render the correct danger button', () => {})

  it('should render the correct based on different props', () => {})

  it('should render the correct disabled button', () => {})
})
