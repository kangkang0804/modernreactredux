import React from 'react'
import ReactDOM from 'react-dom'

const MyModal = ({ title, content, actions, onDismiss }) => {
  const coolModal = (
    <div onClick={onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={e => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>
          <h3>{title}</h3>
        </div>
        <div className='content'>
          <p>{content}</p>
        </div>
        <div className='actions'>{actions}</div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(coolModal, document.querySelector('#cool-modal'))
}

export default MyModal
