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
    const range = Array.from(new Set(product.variants.map(variant => variant.price)))
    return range.length > 1 ? `${Math.min(...range)}-${Math.max(...range)}` : `${range[0]}`;
  }

  const getImage = () => {
    const images = product.variants.map(variant => variant.image).filter(image => image !== null);
    return images.length ? `${process.env.REACT_APP_BACKEND_URL}${images[0]}` : plug;
  }

  return (
    <Link to={`/catalog/${product.id}`} className={styles.card} style={style}>
      <img className={styles.image} src={getImage()} alt="" />
      <div className={styles.description}>
        <span className={styles.price}>{getPrice()} ₽</span>
        <span className={styles.title}>{product.title}</span>
      </div>
    </Link>
  )
}
