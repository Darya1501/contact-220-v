import React from 'react'
import styles from '../landing.module.css'

import icon1 from '../../../images/main-icon-1.svg'
import icon2 from '../../../images/main-icon-2.svg'
import icon3 from '../../../images/main-icon-3.svg'
import icon4 from '../../../images/main-icon-4.svg'

import bunner1 from '../../../images/banner-1.png'
import bunner2 from '../../../images/banner-2.png'
import bunner3 from '../../../images/banner-3.png'
import { Button } from '../../../components/ui/button'

export const MainScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.header}>Интернет-магазин электрики и электротоваров</h1>
        <div className={styles.advantages}>
          <div className={styles.advantage}>
            <img className={styles.icon} src={icon1} alt="" />
            <span>Выгодные цены</span>
          </div>
          
          <div className={styles.advantage}>
            <img className={styles.icon} src={icon2} alt="" />
            <span>Монтажные услуги</span>
          </div>

          <div className={styles.advantage}>
            <img className={styles.icon} src={icon3} alt="" />
            <span>Разные способы оплаты</span>
          </div>

          <div className={styles.advantage}>
            <img className={styles.icon} src={icon4} alt="" />
            <span>Бесплатная доставка Новороссийск, Анапа и Геленджик</span>
          </div>
        </div>
        <Button>Заказать</Button>
      </div>
      <div className={styles.images}>
        <img src={bunner1} alt="" />
        <img src={bunner2} alt="" />
        <img src={bunner3} alt="" />
      </div>
    </div>
  )
}
