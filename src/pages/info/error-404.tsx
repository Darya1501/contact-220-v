import React from 'react'
import Lottie from "lottie-react";
import styles from './info.module.css'
import lonely404 from "../../images/36395-lonely-404.json";

export const Error404 = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h2>Упс! Страница не найдена</h2>
      <p>Привет! Как Вы сюда попали?</p>
      <p>Проверьте корректность введенного url-адреса или воспользуйтесь навигацией сайта, чтобы найти нужный Вам раздел</p>
      <p>Если вам нужна помощь, вы всегда можете написать нам</p>
      <Lottie className={styles.lottie} animationData={lonely404} />
    </div>
  )
}
