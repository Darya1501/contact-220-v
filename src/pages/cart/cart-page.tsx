import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from '../../hooks/store-hooks'

import { CartItem } from '../../components/cart-item/cart-item'
import { Button } from '../../components/ui/button'
import { Loader } from '../../components/ui/loader'
import styles from './cart.module.css'
import { Modal } from '../../components/modal/modal'
import { Form, TFormValues } from '../../components/forms/form'
import { ApplicationSent } from '../../components/ui/application-sent'
import { CLEAR_CART } from '../../store/constants/cart'
import { COOKIE_CART_NAME } from '../../utils/constants'
import { deleteCookie } from '../../utils/cookies'
import { sendTgMessage } from '../../utils/send-tg-message'
import { SmtWentWrong } from '../../components/ui/smt-went-wrong'

export const CartPage = () => {
  const { isProductsRequest } = useSelector(store => store.products)
  const { products } = useSelector(store => store.cart)

  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)
  const [ isNotSentModal, setIsNotSentModal ] = useState(false)

  const dispatch = useDispatch()

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price * product.count, 0)
  }, [products])

  const CartPlug = () => {
    return <span className={styles.plug}>
      В коризне пока ничего нет.
      Выберите товары <Link className={styles.link} to='/catalog'>в каталоге</Link>
    </span>
  }

  const submitOrder = async (data: TFormValues) => {
    let message = `<strong>Новый заказ (из корзины)</strong>\n\nИмя: ${data.name}\nНомер телефона: ${data.phone}\n`;
    if (data.address) message += `\nАдрес доставки: ${data.address}`
    if (data.comment) message += `\nКомментарий: ${data.comment}`
    message += `\n\nЗаказ:${products.map((product, index) => 
    `\n${index + 1}) артикул: ${product.id},\nназвание: ${product.title},\nколичество: ${product.count}`)}`

    sendTgMessage(message)
    .then(() => {
      dispatch({ type: CLEAR_CART })
      deleteCookie(COOKIE_CART_NAME)
      setIsModal(false)
      setIsSentModal(true)
    })
    .catch(() => {
      setIsModal(false)
      setIsNotSentModal(true)
    })
  }

  return (
    <>
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          (
            <div className={styles.items}>
              { products && products.length ? products.map(product => (<CartItem key={product.id} product={product} />)) : <CartPlug /> }
            </div>
          )
        }
        <div className={styles.total}>
          <span className={styles.price}>Итого: {totalPrice} ₽</span>
          <Button isDisabled={!products?.length} onClick={() => setIsModal(true)}>Оформить заказ</Button>
        </div>
      </div>
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
      { isNotSentModal && <Modal onClose={() => setIsNotSentModal(false)}><SmtWentWrong /></Modal> }

    </>
  )
}
