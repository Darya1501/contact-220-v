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
      <NavLink to='/services' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Услуги</NavLink>
      <NavLink to='/about' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Контакты</NavLink>
      <NavLink to='/questions' className={({ isActive }) =>
      isActive ? styles.active : undefined}>Как сделать заказ?</NavLink>
    </div>
  )
}

export const Header = () => {
  const  { products } = useSelector(store => store.cart)

  return (
    <>
      <header className={styles.header}>
        <div className={ `container ${styles.container}` }>
            <Link to='/'>
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <div className={styles.desktop}><Navigation /></div>
            <Link to='/cart' className={styles.cart}>
              <img className={styles.cart} src={cart} alt="Корзина" />
              { products && products.length !== 0 && <span className={styles.counter}>{products.length}</span>}
            </Link>
        </div>
        <div className={styles.mobile}><Navigation /></div>
      </header>
    </>
  )
}
