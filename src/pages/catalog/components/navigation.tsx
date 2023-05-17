import clsx from 'clsx';
import React, { useState } from 'react'
import { useDispatch, useSelector } from '../../../hooks/store-hooks';
import { CHANGE_DISPLAY_CATEGORIES } from '../../../store/constants/categories';
import { TCategory } from '../../../utils/types';
import styles from '../catalog.module.css'

export const Navigation = () => {
  const { categories } = useSelector(state => state.categories);
  const [ activeCategory, setActiveCategory ] = useState<TCategory>();
  const [ isMobileCategoriesVisible, setIsMobileCategoriesVisible] = useState(false)

  const dispatch = useDispatch()

  const categoryClick = (category?: TCategory) => {
    if (category) {
      setActiveCategory(category);
      dispatch({ type: CHANGE_DISPLAY_CATEGORIES, categories: [ category ]})
    } else {
      setActiveCategory(undefined);
      dispatch({ type: CHANGE_DISPLAY_CATEGORIES, categories })
    }
    if (isMobileCategoriesVisible) setIsMobileCategoriesVisible(false)
  }

  const List = () => (
    <div className={styles.navigation}>
      <span
        className={clsx(styles.category, {[styles.active]: !activeCategory})}
        onClick={() => categoryClick()}
      >Все</span>
      {
        categories.map((category) => 
        (
          <span
            key={category.id}
            className={`${styles.category} ${category === activeCategory ? styles.active : ''}`}
            onClick={() => categoryClick(category)}
          >{category.title}</span>
        ))
      }
    </div>
  )

  return (
    <>
      <div className={styles.desktop}>
        <List />
      </div>

      <div className={styles.mobile}>
        <div
          className={styles.mobileNav}
          onClick={() => setIsMobileCategoriesVisible(true)}
        >
          <span className={styles.category}>Категория:
            {!isMobileCategoriesVisible && activeCategory ? ` ${activeCategory.title}` : ' Все'}
          </span>
        </div>
        { isMobileCategoriesVisible && (<List />) }
      </div>
    </>
  )
}
