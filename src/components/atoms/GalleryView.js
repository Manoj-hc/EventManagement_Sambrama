import React from 'react'
import styles from '../../../styles/GalleryView.module.css'
import LogoSection from '../molecules/LogoSection'
import ButtonText from '../molecules/ButtonText'
import Contact from './Contact'
import GridView from './GridView1'

const GalleryView = ({
  images,
  subHeading,
  buttonText,
  contactInfo,
}) =>  {
  return (
    <div>
      <div className='container'>
        <div className={styles.logoWrapper}>
          <LogoSection />
        </div>
        <div className={styles.headingContainer}>
          <h1 className={styles.pageHeading}> Welcome </h1>
          <p className={styles.subHeading}> {subHeading} </p>
        </div>
        <GridView images={images} />
        <div className={styles.buttonText}>
          <ButtonText text='Load More' />
        </div>
        <div className={styles.contactContainer}>
          <h1 className={styles.contactHeading}> 
            {contactInfo}
          </h1>
          <Contact buttonText={buttonText} />
        </div>
      </div>
    </div>
  )
}

export default GalleryView
