import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import styles from '../../../styles/Molecules.module.css'

const ButtonText = ({ text }) => {
  return (
    <div className={styles.textButtonContainer}>
      <span className={styles.textButton}> 
        {text}
      </span>
      <FiChevronsRight size={20} className={styles.icon} />
    </div>
  )
}

export default ButtonText