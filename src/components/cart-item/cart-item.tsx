import React, { FC } from 'react'
import { TCartProduct } from '../../utils/types'
import styles from './cart-item.module.css'
import plug from '../../images/no-photo.png'
import trash from '../../images/trash-icon.svg'
import { useDispatch } from '../../hooks/store-hooks'
import { DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } from '../../store/constants/cart'
import { Link } from 'react-router-dom'
import { CountInput } from '../count-input/count-input'

type TItemProps = {
  product: TCartProduct
}

export const CartItem: FC<TItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const changeCount = (action: 'increment' | 'decrement') => {
    dispatch({ 
      type: action === 'increment' ? INCREMENT_PRODUCT_COUNT : DECREMENT_PRODUCT_COUNT,
      id: product.id
    })
  }

  const deleteProduct = () => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, id: product.id })
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.info}>
        <Link to={`/catalog/${product.id}`} className={styles.name}>{product.title}</Link>
        <CountInput count={product.count} changeCount={changeCount} />
        <span className={styles.price}>{product.price * product.count}₽</span>
      </div>
      <button className={styles.trash} onClick={deleteProduct}><img src={trash} alt="delete product" /></button>
    </div>
  )
}
