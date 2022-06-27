import React from 'react'
import IButton from './components/i-button/src/index'
function App() {
  return (
    <div>
      <IButton
        btnType='primary'
        onClick={() => {
          alert('点击按钮')
        }}
        render={() => <span>点我一下</span>}
      ></IButton>
      <IButton btnType='primary' size='small'>
        primary
      </IButton>
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
      <IButton btnType='default' size='small' className=''>
        small
      </IButton>
    </div>
  )
}

export default App
