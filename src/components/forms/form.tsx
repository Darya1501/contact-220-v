import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PhoneInput } from '../ui/phone-input';
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import styles from './form.module.css'

export type TFormValues = {
  name: string;
  phone: string;
  address: string,
  comment: string
}

type TFormProps = {
  size: 'small' | 'normal',
  onSubmit: (data: TFormValues) => void
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Имя - обязательное поле")
    .min(2, "Должно быть минимум 2 буквы"),
  phone: yup
    .string()
    .required("Номер телефона - обязательное поле")
    .min(18, "Должно быть 11 цифр"),
  address: yup.string(),
  comment: yup.string()
})

export const Form: FC<TFormProps> = ({ size, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const fullSubmit = (data: TFormValues) => {
    onSubmit(data)
    reset()
  }

  return (
    <form className={ size === 'normal' ? styles.form : styles.small } onSubmit={handleSubmit(fullSubmit)}>
      <div className={ size === 'normal' ? styles.row : styles.column }>

        <Input 
          label='Имя'
          id="name"
          type="text"
          placeholder="Иван"
          errormessage={errors.name ? errors.name.message : ''}
          {...register("name")}
        />

        <PhoneInput 
          id="phone"
          placeholder="+7 (900) 000-00-00"
          errormessage={errors.phone ? errors.phone.message : ''}
          {...register("phone")}
        />
      </div>

      <Input 
        label='Адрес доставки'
        id='address'
        type='text'
        placeholder='Введите адрес' 
        errormessage={errors.address ? errors.address.message : ''}
        {...register('address')}
      />

      <label className={styles.label}>
        <span>Комментарий</span>
        <textarea
          id="comment"
          className={styles.textarea}
          placeholder='Если у вас есть какие-нибудь пожелания, напишите их здесь'
          {...register('comment')}
        ></textarea>
      </label>

      <Button>Заказать</Button>
    </form>
  )
}
