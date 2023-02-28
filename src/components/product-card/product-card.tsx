import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '../../utils/types'
import styles from './product-card.module.css'
import plug from '../../images/no-photo.png'
import CSS from 'csstype';

type TProductCardProps = {
  product: TProduct, 
  style?: CSS.Properties
}

export const ProductCard: FC<TProductCardProps>= ({ product, style }) => {
  return (
    <Link to={`/catalog/${product.id}`} className={styles.card} style={style}>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.description}>
        <span className={styles.price}>{product.price} ₽</span>
        <span className={styles.title}>{product.title}</span>
      </div>
    </Link>
  )
}
