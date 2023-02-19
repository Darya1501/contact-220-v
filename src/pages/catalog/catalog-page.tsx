import React, { useState } from 'react'
import { ProductCard } from '../../components/product-card/product-card'
import { Loader } from '../../components/ui/loader'
import { SmtWentWrong } from '../../components/ui/smt-went-wrong'
import { useSelector } from '../../hooks/store-hooks'
import { getCategories } from '../../utils/products-functions'
import styles from './catalog.module.css'

export const CatalogPage = () => {
  const { isProductsRequest, isProductsSuccess, isProductsFailed, products } = useSelector(state => state.products);
  const categories = getCategories(products);

  const [ activeCategory, setActiveCategory ] = useState('Все')

  const categoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory('Все')
    } else {
      setActiveCategory(category)
    }
  }

  const Navigation = () => (
    <div className={styles.navigation}>
      {
        categories.map((category: string) => 
        (
          <span
            key={category}
            className={`${styles.category} ${category === activeCategory ? styles.active : ''}`}
            onClick={() => categoryClick(category)}
          >{category}</span>
        ))
      }
    </div>
  )

  const Products = () => (
    <div className={styles.products}>
      { 
        products.map(product => {
          if (activeCategory !== 'Все') {
            if (product.category === activeCategory) {
              return (<ProductCard key={product.id} product={product} />)
            } else {
              return null
            }
          } else {
            return (<ProductCard key={product.id} product={product} />)
          }
        }
      )}
    </div>
  )

  return (
    <div className={`container ${styles.container}`}>
      {
        isProductsRequest ? (<Loader />) :
        isProductsFailed ? (<SmtWentWrong />) :
        isProductsSuccess ?
        (products.length ? (
          <>
            <Navigation />
            <Products />
          </>
        ) : (<h2>В магазине пока нет товаров. Загляните к нам позже</h2>)) : null
      }
    </div>
  )
}
