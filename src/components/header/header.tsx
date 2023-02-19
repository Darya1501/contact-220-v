import React from 'react'
import logo from '../../images/logo-row.svg'
import cart from '../../images/cart.svg'
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to='/catalog' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Каталог</NavLink>
      <NavLink to='/contacts' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Контакты</NavLink>
      <NavLink to='/questions' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Как сделать заказ?</NavLink>
    </div>
  )
}

export const Header = () => {
  const  { products } = useSelector(store => store.cart)
  console.log('products: ', !!products, !!products.length);

  return (
    <>
      <header className={styles.header}>
        <div className={ `container ${styles.container}` }>
            <Link to='/'>
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <div className={styles.desctop}><Navigation /></div>
            <Link to='/cart' className={styles.cart}>
              <img className={styles.cart} src={cart} alt="Корзина" />
              { products && products.length && <span className={styles.counter}>{products.length}</span>}
            </Link>
        </div>
        <div className={styles.mobile}><Navigation /></div>
      </header>
    </>
  )
}
