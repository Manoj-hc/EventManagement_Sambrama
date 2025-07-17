import React from 'react'
import { FiChevronsDown } from 'react-icons/fi'
import styles from '../../../../styles/Home.module.css'
import ContentSection from './atoms/ContentSection'
import ImageSection from './atoms/ImageSection'

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <ContentSection />
        <ImageSection />
      </div>
      <div className={styles.arrowDownWrapper}>
        <FiChevronsDown className={styles.arrowDown} size={20} />
      </div>
    </>
  )
}

export default HeroSection