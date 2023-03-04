import React from 'react'
import styles from "./ui.module.css"

export const ApplicationSent = () => {
  return (
    <div className={styles.sent} >
      Заявка отправлена <br />
      Мы свяжемся с вами в ближайшее время
    </div>
  )
}
