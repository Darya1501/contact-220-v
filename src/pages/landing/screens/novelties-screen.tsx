import React from 'react'
import { Link } from 'react-router-dom';
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
      <Link className={styles.link} to='/catalog'>Все товары {'->'}</Link>
    </div>
  )
}
