import React, { FC } from 'react'
import styles from './modal.module.css'

type TModalOverlayProps = {
  onClose: () => void
}

export const ModalOverlay: FC<TModalOverlayProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}></div>
  )
}
