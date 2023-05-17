import React from 'react'
import { ProductCard } from '../../components/product-card/product-card'
import { Loader } from '../../components/ui/loader'
import { SmtWentWrong } from '../../components/ui/smt-went-wrong'
import { useSelector } from '../../hooks/store-hooks'
import styles from './catalog.module.css'
import { Navigation } from './components/navigation'

export const CatalogPage = () => {
  const { isProductsRequest, isProductsSuccess, isProductsFailed, products } = useSelector(state => state.products);
  const { displayCategories } = useSelector(state => state.categories);

  const Products = () => (
    <div className={styles.products}>
      { 
        products.map(product => {
          const style = displayCategories.includes(product.id) ? undefined : ({display: 'none'});
          return (
          <ProductCard
            key={product.id}
            product={product}
            style={style}
          />
        )}
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
