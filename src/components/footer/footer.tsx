import React from 'react'
import logo from '../../images/logo.svg'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.info}>
          <div className={styles.block}>
            <span>Информация</span>
            <span>О компании</span>
            <span>Доставка и оплата</span>
          </div>
          <div className={styles.block}>
            <span>Мы на торговых площадках</span>
            <span>market.yandex.ru/</span>
            <span>wildberries.ru/seller/</span>
          </div>
          <div className={styles.block}>
            <span>Контакты</span>
            <span>+7 900 000 00 00</span>
            <span>mail@mail.ru</span>
            <span>vk.com/id000000000</span>
            <span>t.me/@username</span>
            <span>г. Новороссийск, ул. Уличная, д. 15</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
