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
    const url_api = `https://api.telegram.org/bot${ process.env.REACT_APP_TELEGRAM_TOKEN }/sendMessage`

    // const title = 'Заявка на звонок с лендинга';
    const message = 
      `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}`;

    const params = {
      chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
      text: message
    }

    await fetch(url_api, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
        'content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(function (response) {
      console.log('response: ', response);
    })
    .catch(function (error) {
      console.log('error: ', error);
    });

    // setIsSentModal(true)
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
