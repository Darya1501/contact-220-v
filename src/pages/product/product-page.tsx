import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks/store-hooks'

import { Button } from '../../components/ui/button'
import { TProduct, TProductsCharacteristic } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'
import { Loader } from '../../components/ui/loader'
import { CountInput } from '../../components/count-input/count-input'
import { ADD_PRODUCT_TO_CART } from '../../store/constants/cart'
import { updateCookieCart } from '../../utils/cart-functions'
import { isProductInCart } from '../../utils/products-functions'
import { Modal } from '../../components/modal/modal'
import { Form, TFormValues } from '../../components/forms/form'
import { ApplicationSent } from '../../components/ui/application-sent'

export const ProductPage = () => {
  const { isProductsRequest, products } = useSelector(store => store.products)
  const { products : cartProducts } = useSelector(store => store.cart)

  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.find((product: TProduct) => product.id === id)

  const getCharacteristics = (characteristics: Array<TProductsCharacteristic>) => {
    const result: Array<{name: string, value: string}> = []
    for (let key in characteristics) {
      result.push({ name: key, value: characteristics[key] as unknown as string })
    }
    return result
  }

  const [ count, setCount ] = useState(1);
  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)
  const [ isInCart, setIsInCart ] = useState(isProductInCart(currentProduct, cartProducts))

  const changeCount = (action: 'increment' | 'decrement') => {
    action === 'increment' ? setCount(count + 1) : setCount(count - 1);
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (currentProduct) {
      dispatch({ type: ADD_PRODUCT_TO_CART, product: { ...currentProduct, count: count } })
      setIsInCart(true)
      updateCookieCart([ ...cartProducts, { ...currentProduct, count: count } ])
    }
  }

  const submitOrder = async (data: TFormValues) => {
    if (currentProduct) {
      const title = 'Новый заказ';
      const message = 
      `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}.
      Заказ: ${currentProduct.title} (артикул: ${currentProduct.id}), количество: ${count})}`;

      await fetch('send.php', {
        method: "POST",
        body: JSON.stringify({ title: title, message: message })
      })

      setIsModal(false)
      setIsSentModal(true)
    }
  }

  return (
    <>
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          currentProduct ?
            (
              <>
                <img className={styles.image} src={currentProduct.image ? currentProduct.image : plug} alt="" />
                <div className={styles.wrapper}>
                  <div className={styles.description}>
                    <h2 className={styles.h2}>{currentProduct.title}</h2>
                    <p className={styles.id}>Артикул: {currentProduct.id}</p>
                    <div className={styles.characteristics}>
                      <p>Основные характеристики</p>
                      {
                        getCharacteristics(currentProduct.characteristics).length ?
                        getCharacteristics(currentProduct.characteristics).map(
                          (characteristic: {name: string, value: string}) => (
                          <div className={styles.characteristic} key={characteristic.name}>
                            <span>{characteristic.name}</span>
                            <span>{characteristic.value}</span>
                          </div>
                        )) : (<span>У товара не указаны характеристики</span>)
                      }
                    </div>
                  </div>
                  <div className={styles.buy}>
                    <div className={styles.count}>
                      <span className={styles.price}>{currentProduct.price * count} ₽</span>
                      <CountInput count={count} changeCount={changeCount} />
                    </div>
                    <Button isDisabled={isInCart} style={{ width: '100%' }} onClick={addToCart}>
                      { isInCart ? 'Товар в корзинe' : 'В корзину' }
                    </Button>
                    <Button onClick={() => setIsModal(true)} isSecondary style={{ width: '100%' }}>Заказать сейчас</Button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <h2>Вы попали на страницу не существующего товара</h2>
                <p>Проверьте корректность ссылки или загляните <Link to='/catalog'>в каталог</Link></p>
              </div>
            )
        }
      </div>
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
    </>
  )
}
