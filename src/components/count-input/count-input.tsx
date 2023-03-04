import React, { FC } from 'react'
import styles from './count-input.module.css'

type TCountInputProps = {
  count: number
  changeCount: (action: 'increment' | 'decrement') => void
}

export const CountInput: FC<TCountInputProps> = ({ count, changeCount }) => {
  return (
    <div className={styles.counter}>
      <span className={styles.count}>{count}</span>
      <div className={styles.buttons}>
        <button className={styles.plus} onClick={() => changeCount('increment')}>+</button>
        <button className={styles.minus} disabled={count === 1} onClick={() => changeCount('decrement')}>-</button>
      </div>
    </div>
  )
}
