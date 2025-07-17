import React from 'react'
import styles from '../../../../../styles/Home.module.css'
import ButtonText from '../../../molecules/ButtonText'
import LogoSection from '../../../molecules/LogoSection'

const ContentSection = () => {
  return (
    <div className={styles.contentSection}>
      <LogoSection />
      <div className={styles.content}>
        <p className={styles.name}> Sambrama Events </p>
        <h1 className={styles.heading}> We plan & organize your celebrations. </h1>
        <p className={styles.label}> A Complete Events Management Solution </p>
      </div>

      <ButtonText text='Book an event' />
    </div>
  )
}

export default ContentSection