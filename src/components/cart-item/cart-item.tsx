import React, { FC } from 'react'
import { TCartProduct } from '../../utils/types'
import styles from './cart-item.module.css'
import plug from '../../images/no-photo.png'
import trash from '../../images/trash-icon.svg'
import { useDispatch, useSelector } from '../../hooks/store-hooks'
import { DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } from '../../store/constants/cart'
import { Link } from 'react-router-dom'
import { CountInput } from '../count-input/count-input'
import { updateCookieCart } from '../../utils/cart-functions'

type TItemProps = {
  product: TCartProduct
}

export const CartItem: FC<TItemProps> = ({ product }) => {
  const { products: cartProducts } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const changeCount = (action: 'increment' | 'decrement') => {
    dispatch({ 
      type: action === 'increment' ? INCREMENT_PRODUCT_COUNT : DECREMENT_PRODUCT_COUNT,
      id: product.cartID
    })

    const newCount = action === 'increment' ? product.count + 1 : product.count - 1;
    updateCookieCart(cartProducts.map(item => product.id === item.id ? ({ ...item, count: newCount }) : item))
  }

  const deleteProduct = () => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, id: product.cartID })
    updateCookieCart(cartProducts.filter(item => product.id !== item.id))
  }

  const getImage = () => {
    const images = product.variants.map(variant => variant.image).filter(image => image !== null);
    return images.length ? `${process.env.REACT_APP_BACKEND_URL}${images[0]}` : plug;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={getImage()} alt="" />
      <div className={styles.info}>
        <Link to={`/catalog/${product.id}`} className={styles.name}>
          {product.title}{product.variant ? `, ${product.variant.title}` : ''}
        </Link>
        <CountInput count={product.count} changeCount={changeCount} />
        <span className={styles.price}>{product.variant.price * product.count}₽</span>
      </div>
      <button className={styles.trash} onClick={deleteProduct}><img src={trash} alt="delete product" /></button>
    </div>
  )
}
