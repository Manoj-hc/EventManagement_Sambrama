import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import styles from '../../../styles/Molecules.module.css'

const ButtonText1 = ({ text }) => {
  return (
    <div className={styles.textButtonContainer}>
      <span className={styles.textButton1}>
        {text}
      </span>
    </div>
  )
}

export default ButtonText1