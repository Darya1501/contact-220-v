import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_2, PHONE_NUMBER_FORMATTED, PHONE_NUMBER_FORMATTED_2, YANDEX_MARKET } from '../../utils/constants'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <div className={styles.info}>
          <div className={styles.block}>
            <span>Информация</span>
            <Link to='about'>О компании</Link>
            <span>Доставка и оплата</span>
          </div>
          <div className={styles.block}>
            <span>Мы на торговых площадках</span>
            <a href={YANDEX_MARKET} target="_blank" rel="noreferrer">Яндекс маркет</a>
          </div>
          <div className={styles.block}>
            <span>Контакты</span>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_FORMATTED}</a>
            <a href={`tel:${PHONE_NUMBER_2}`}>{PHONE_NUMBER_FORMATTED_2}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>г. Новороссийск, ул. Уличная, д. 15</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
