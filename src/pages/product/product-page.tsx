import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'

import { Button } from '../../components/ui/button'
import { TProduct } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'
import { Loader } from '../../components/ui/loader'
import { CountInput } from '../../components/count-input/count-input'

export const ProductPage = () => {
  const { isProductsRequest, products } = useSelector(store => store.products)

  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.find((product: TProduct) => product.id === id)

  const [ count, setCount ] = useState(1);

  const changeCount = (action: 'increment' | 'decrement') => {
    action === 'increment' ? setCount(count + 1) : setCount(count - 1);
  }

  const isInCart = false

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
                      <div className={styles.characteristic}><span>Производитель</span><span>Systeme Electric</span></div>
                      <div className={styles.characteristic}><span>Производитель</span><span>Systeme Electric</span></div>
                      <div className={styles.characteristic}><span>Производитель</span><span>Systeme Electric</span></div>
                    </div>
                  </div>
                  <div className={styles.buy}>
                    <div className={styles.count}>
                      <span className={styles.price}>{currentProduct.price * count} ₽</span>
                      <CountInput count={count} changeCount={changeCount} />
                    </div>
                    <Button isDisabled={isInCart} style={{ width: '100%' }}>
                      { isInCart ? 'Товар в корзинe' : 'В корзину' }
                    </Button>
                    <Button isSecondary style={{ width: '100%' }}>Заказать сейчас</Button>
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
    </>
  )
}
