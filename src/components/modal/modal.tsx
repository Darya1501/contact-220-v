import React, { FC, ReactElement, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { ESC_KEY } from '../../utils/constants';

import { ModalOverlay } from './modal-overlay'
import styles from './modal.module.css'
import close from '../../images/close.svg'

type TModalProps = {
  children: ReactElement,
  onClose: () => void
}

export const Modal: FC<TModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if(event.key === ESC_KEY) onClose()
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} data-cy="modal-close-button">
          <img src={close} alt="close" />
        </button>
        {children}
      </div>
    </>, document.getElementById('react-modals')!
  )
}