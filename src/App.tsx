import React from 'react'
import IButton from './components/i-button'
import { IMenu } from './components/i-menu'
import { IMenuItem } from './components/i-menu'
function App() {
  return (
    <div>
      <IButton
        btnType='primary'
        onClick={() => {
          alert('点击按钮')
        }}
        render={props => <span>点我一下</span>}
      ></IButton>
      <IButton size='small'>primary</IButton>
      <IButton size='small'>按钮</IButton>
      <IButton btnType='warning' size='large'>
        warning large
      </IButton>
      <IButton btnType='danger'>danger</IButton>
      <IButton btnType='danger' disabled>
        danger
      </IButton>
      <IButton btnType='default'>defuault</IButton>
      <IButton btnType='default' size='large'>
        large
      </IButton>
      <IButton btnType='default' size='small' className=' ' round>
        small
      </IButton>
      <hr />
      <IMenu mode='vertical' onSelect={index => {}}>
        <IMenuItem index={0}>item1</IMenuItem>
        <IMenuItem index={1}>item2</IMenuItem>
      </IMenu>
      <IMenu mode='horizontal' onSelect={index => {}}>
        <IMenuItem index={0}>item1</IMenuItem>
        <IMenuItem index={1}>item2</IMenuItem>
      </IMenu>
    </div>
  )
}

export default App
