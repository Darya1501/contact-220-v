import React, { FC, useEffect, useState } from 'react'
import { CountInput } from '../../components/count-input/count-input'
import { Button } from '../../components/ui/button'
import { useDispatch, useSelector } from '../../hooks/store-hooks'
import { addCartProduct } from '../../store/actions/cart'
import { updateCookieCart } from '../../utils/cart-functions'
import { isProductInCart } from '../../utils/products-functions'
import { TProduct, TProductVariant } from '../../utils/types'

import styles from './product.module.css'

type TPriceCartBlock = {
  currentProduct: TProduct,
  selectedVariant: TProductVariant | undefined,
  count: number,
  setCount: (arg: number) => void,
  setIsModal: (arg: boolean) => void
}

export const PriceCartBlock: FC<TPriceCartBlock> = ({ currentProduct, selectedVariant, count, setCount, setIsModal }) => {
  const { products : cartProducts } = useSelector(store => store.cart)

  const [ isInCart, setIsInCart ] = useState(isProductInCart(currentProduct, cartProducts, selectedVariant))

  useEffect(() => {
    setIsInCart(isProductInCart(currentProduct, cartProducts, selectedVariant))
  }, [cartProducts, currentProduct, selectedVariant])

  useEffect(() => {
    if (cartProducts.length) updateCookieCart(cartProducts)
  }, [cartProducts])

  const changeCount = (action: 'increment' | 'decrement') => {
    action === 'increment' ? setCount(count + 1) : setCount(count - 1);
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (currentProduct) {
      dispatch(addCartProduct(currentProduct, count, selectedVariant))
      setIsInCart(true)
    }
  }

  return (
    <div>
      <div className={styles.buy}>
        <div className={styles.count}>
          <span className={styles.price}>
            { selectedVariant ? selectedVariant.price * count : currentProduct.price * count } ₽
          </span>
          <CountInput count={count} changeCount={changeCount} />
        </div>
        <Button isDisabled={isInCart} style={{ width: '100%' }} onClick={addToCart}>
          { isInCart ? 'Товар в корзинe' : 'В корзину' }
        </Button>
        <Button onClick={() => setIsModal(true)} isSecondary style={{ width: '100%' }}>Заказать сейчас</Button>
      </div>
      {
        currentProduct.quantity && currentProduct.quantity.show && currentProduct.quantity.count > 0 &&
        (<p className={styles.quantity}>Количество на складе: {currentProduct.quantity.count}</p>)
      }
    </div>
  )
}
