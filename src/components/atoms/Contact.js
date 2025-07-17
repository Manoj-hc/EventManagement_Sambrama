import React from 'react'
import styles from '../../../styles/AboutUs.module.css'
import ButtonText from '../molecules/ButtonText'

const Contact = ({ buttonText }) => (
  <div className={styles.contactWrapper}>
    <div className={styles.inputWrapper}>
      <input className={styles.input} placeholder='Your name' />
    </div>
    <div className={styles.inputWrapper}>
      <input className={styles.input} placeholder='Email id' />
    </div>
    <div className={styles.inputWrapper}>
      <input className={styles.input} placeholder='Phone no' />
    </div>
    <div className={styles.inputWrapper}>
      <input className={`${styles.input} ${styles.splitInput}`} placeholder='Type of event' />
      <input className={`${styles.input} ${styles.splitInput}`} placeholder='Date of event' />
    </div>
    <div className={styles.breaker} />
    <ButtonText text={buttonText || 'Hear From Us'} />
  </div>
)

export default Contact
