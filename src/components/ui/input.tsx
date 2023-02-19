import React, { ForwardedRef, forwardRef } from 'react'
import styles from './ui.module.css'

type TInputProps = {
  label: string
  id: string
  type: string
  placeholder: string
  errormessage?: string,
}

export const Input = forwardRef((props: TInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label } = {...props};
  return (
    <label className={styles.label}>
      <span>{label}</span>
      { props.errormessage && <p className={styles.error}>{props.errormessage}</p> }
      <input {...props} ref={ref} className={styles.input} />
    </label>
  )
})