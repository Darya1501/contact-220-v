import React, { FC } from 'react'
import { Form, TFormValues } from '../../../components/forms/form'
import styles from '../landing.module.css'

type TScreenProps = {
  formRef: React.RefObject<HTMLDivElement>
}

export const FormScreen: FC<TScreenProps> = ({ formRef }) => {
  const submitForm = (data: TFormValues) => {
    console.log('data: ', data);
  }

  return (
    <div className={styles.form} ref={formRef}>
      <div className={styles.question}>
        <h2>Уже определились с покупкой?</h2>
        <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
      </div>

      <Form size='normal' onSubmit={submitForm} />
    </div>
  )
}
