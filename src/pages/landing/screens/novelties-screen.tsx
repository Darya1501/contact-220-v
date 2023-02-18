import React from 'react'
import { ProductCard } from '../../../components/product-card/product-card'
import { useSelector } from '../../../hooks/store-hooks';
import { TProduct } from '../../../utils/types';
import styles from '../landing.module.css'

export const NoveltiesScreen = () => {
  const { products } = useSelector(state => state.products);

  return (
    <div className={styles.novelties}>
      <h2 className={styles.h2}>Новинки</h2>
      <div className={styles.products}>
        { products.slice(0, 6).map((product: TProduct) => (<ProductCard key={product.id} product={product} />)) }
      </div>
      <a className={styles.link} href='/catalog'>Все товары {'->'}</a>
    </div>
  )
}
