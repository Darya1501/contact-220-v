import React from 'react'
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_2, PHONE_NUMBER_FORMATTED, PHONE_NUMBER_FORMATTED_2, YANDEX_MARKET } from '../../utils/constants'
import styles from './info.module.css'

export const AboutPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h2>О компании</h2>
      <div className={styles.block}>
        <h3>Контакты</h3>
        <p>Основной номер телефона: <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_FORMATTED}</a></p>
        <p>Дополнительный номер телефона: <a href={`tel:${PHONE_NUMBER_2}`}>{PHONE_NUMBER_FORMATTED_2}</a></p>
        <p>Почта: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      </div>

      <div className={styles.block}>
        <h3>Мы на маркетплейсах</h3>
        <p><a href={YANDEX_MARKET} target="_blank" rel="noreferrer">Яндекс маркет</a></p>
      </div>

      <div className={styles.block}>
        <h3>Юридическая информация</h3>
        <p><span>Наименование:</span> ИП Лихоненко Тимофей Сергеевич</p>
        <p><span>ИНН:</span> 2315 1415 8874</p>
        <p><span>ОГРНИП:</span> 32223 75003 52518</p>
        <p><span>ОКПО:</span> 2018 3776 47</p>
        <p><span>ОКТМО:</span> 03 720 000 001</p>
        <p><span>Юридический адрес:</span> 353910, РОССИЯ, КРАСНОДАРСКИЙ край, НОВОРОССИЙСК г, ЛЕНИНА пр-кт, ДОМ 22, кв 288</p>
      </div>
    </div>
  )
}
