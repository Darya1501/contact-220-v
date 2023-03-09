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
  const getPrice = () => {
    let price = '0';

    if (product.variants) {
      const range = product.variants.map(variant => variant.price)
      price = `${Math.min(...range)}-${Math.max(...range)}`
    } else {
      price = `${product.price}`
    }

    return price
  }

  return (
    <Link to={`/catalog/${product.id}`} className={styles.card} style={style}>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.description}>
        <span className={styles.price}>{getPrice()} ₽</span>
        <span className={styles.title}>{product.title}</span>
      </div>
    </Link>
  )
}
