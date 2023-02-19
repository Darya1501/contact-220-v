import React, { FC } from 'react'
import { useDispatch } from '../../hooks/store-hooks'
import { DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT } from '../../store/constants/products'
import { TProduct } from '../../utils/types'
import styles from './count-input.module.css'

type TCountInputProps = {
  product: TProduct
}

export const CountInput: FC<TCountInputProps> = ({ product }) => {
  const dispatch = useDispatch()

  const changeCount = (action: 'increment' | 'decrement') => {
      dispatch({ 
        type: action === 'increment' ? INCREMENT_PRODUCT_COUNT : DECREMENT_PRODUCT_COUNT,
        id: product.id
      })
    }

  return (
    <div className={styles.counter}>
      <span className={styles.count}>{product.count}</span>
      <div className={styles.buttons}>
        <button className={styles.plus} onClick={() => changeCount('increment')}>+</button>
        <button className={styles.minus} disabled={product.count === 1} onClick={() => changeCount('decrement')}>-</button>
      </div>
    </div>
  )
}
