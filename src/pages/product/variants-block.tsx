import React, { FC } from 'react'
import { TProductVariant } from '../../utils/types'
import styles from './product.module.css'

type TVariantsBlock = {
  variants: Array<TProductVariant>,
  selectedVariant: TProductVariant | undefined,
  setSelectedVariant: (arg: TProductVariant) => void
}

export const VariantsBlock: FC<TVariantsBlock> = ({ variants, selectedVariant, setSelectedVariant }) => {
  return (
  <>
    <p>Варианты</p>
    <div className={styles.variants}>
      {
        variants.map(variant => (
          <div
            className={`${styles.variant} ${variant === selectedVariant ? styles.active : ''}`}
            key={variant.variant}
            onClick={() => setSelectedVariant(variant)}
          >
            <span>{variant.variant}</span>
          </div>
        ))
      }
    </div>
  </>
  )
}
