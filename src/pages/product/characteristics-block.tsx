import React, { FC } from 'react'
import { TProduct, TProductsCharacteristic } from '../../utils/types'

import styles from './product.module.css'

type TCharacteristicsBlock = {
  currentProduct: TProduct
}

export const CharacteristicsBlock: FC<TCharacteristicsBlock> = ({ currentProduct }) => {
  const getCharacteristics = (characteristics: Array<TProductsCharacteristic>) => {
    const result: Array<{name: string, value: string}> = []
    for (let key in characteristics) {
      result.push({ name: key, value: characteristics[key] as unknown as string })
    }
    return result
  }

  return (
    <>
      <p>Основные характеристики</p>
        {
          currentProduct.characteristics &&
          getCharacteristics(currentProduct.characteristics).length ?
          getCharacteristics(currentProduct.characteristics).map(
            (characteristic: {name: string, value: string}) => (
            <div className={styles.characteristic} key={characteristic.name}>
              <span className={styles.name}>{characteristic.name}</span>
              <span className={styles.value}>{characteristic.value}</span>
            </div>
          )) : (<span>У товара не указаны характеристики</span>)
        }
    </>
  )
}
