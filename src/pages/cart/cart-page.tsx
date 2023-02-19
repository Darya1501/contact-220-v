import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from '../../hooks/store-hooks'

import { CartItem } from '../../components/cart-item/cart-item'
import { Button } from '../../components/ui/button'
import { Loader } from '../../components/ui/loader'
import styles from './cart.module.css'
import { Modal } from '../../components/modal/modal'
import { Form, TFormValues } from '../../components/forms/form'
import { ApplicationSent } from '../../components/ui/application-sent'

export const CartPage = () => {
  const { isProductsRequest } = useSelector(store => store.products)
  const { products } = useSelector(store => store.cart)
  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price * product.count, 0)
  }, [products])

  const CartPlug = () => {
    return <span className={styles.plug}>
      В коризне пока ничего нет.
      Выберите товары <Link className={styles.link} to='/catalog'>в каталоге</Link>
    </span>
  }

  const submitOrder = (data: TFormValues) => {
    console.log('data: ', data);
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
    </>
  )
}
