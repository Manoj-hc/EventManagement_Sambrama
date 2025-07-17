import React from 'react'
import styles from '../../../styles/AboutUs.module.css'
import About from '../atoms/About'
import Contact from '../atoms/Contact'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <About />
      <div className={styles.contactContainer}>
        <h1 className={`${styles.heading} ${styles.contactHeading}`}> Got An Event!? <br /> Reach Us Out </h1>
        <Contact />
      </div>
    </div>
  )
}

export default AboutUs
