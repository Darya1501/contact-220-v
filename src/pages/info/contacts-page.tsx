import React from 'react'
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_FORMATTED, VK } from '../../utils/constants'
import styles from './info.module.css'

export const ContactsPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h2>Контакты</h2>
      <div className={styles.block}>
        <p>Номер телефона: <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_FORMATTED}</a></p>
        <p>Почта: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      </div>
      <div className={styles.block}>
        <h3>Социальные сети и мессенджеры:</h3>
        <p>Группа вконтакте: <a href={VK} target="_blank" rel="noreferrer">название</a></p>
        {/* <p>Телеграм: {TELEGRAM}</p> */}
      </div>
      {/* <div className={styles.block}>
        <h3>Юридическая информация:</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, molestiae.</p>
      </div> */}
    </div>
  )
}
