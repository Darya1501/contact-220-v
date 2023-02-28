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

  const submitForm = async (data: TFormValues) => {
    const title = 'Заявка на звонок с лендинга';
    const message = 
      `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}`;

    await fetch('send.php', {
      method: "POST",
      body: JSON.stringify({ title: title, message: message })
    })
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
