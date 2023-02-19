import React, { FC, useState } from 'react'
import { Form, TFormValues } from '../../../components/forms/form'
import { Modal } from '../../../components/modal/modal'
import { ApplicationSent } from '../../../components/ui/application-sent'
import styles from '../landing.module.css'

type TScreenProps = {
  formRef: React.RefObject<HTMLDivElement>
}

export const FormScreen: FC<TScreenProps> = ({ formRef }) => {
  const [ isSentModal, setIsSentModal ] = useState(false)

  const submitForm = (data: TFormValues) => {
    console.log('data: ', data);
    setIsSentModal(true)
  }

  return (
    <div className={styles.form} ref={formRef}>
      <div className={styles.question}>
        <h2>Уже определились с покупкой?</h2>
        <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
      </div>

      <Form size='normal' onSubmit={submitForm} />
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
    </div>
  )
}
