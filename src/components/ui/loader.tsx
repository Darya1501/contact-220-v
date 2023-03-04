import React from 'react'
import styles from './ui.module.css'

export const Loader = () => {
  return (
    <div className={styles.lds}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
