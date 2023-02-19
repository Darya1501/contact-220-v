import React, { FC, ReactNode, SyntheticEvent } from 'react'
import CSS from 'csstype';
import styles from "./ui.module.css"

type TPropButton = {
  children: ReactNode,
  isSecondary?: boolean,
  onClick?: (() => void) | ((e: SyntheticEvent) => void),
  isDisabled?: boolean,
  style?: CSS.Properties
}
export const Button: FC<TPropButton> = ({ children, isSecondary, onClick, isDisabled, style }) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${isSecondary ? styles.secondary : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
    >{children}</button>
  )
}
