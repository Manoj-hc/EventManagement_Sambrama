import React from 'react'
import styles from '../../../styles/GalleryView.module.css'
import Footer from '../atoms/Footer'
import GalleryView from '../atoms/GalleryView'
import { imagesCatalogue } from '../../constants'

const WeddingGallery = () => {
const images = [imagesCatalogue.wedding1, imagesCatalogue.wedding2, imagesCatalogue.wedding3, imagesCatalogue.wedding4, imagesCatalogue.wedding5, imagesCatalogue.wedding6, imagesCatalogue.wedding7, imagesCatalogue.wedding8, imagesCatalogue.wedding9, imagesCatalogue.wedding10, imagesCatalogue.wedding11, imagesCatalogue.wedding12, imagesCatalogue.wedding13]
  return (
    <div className={styles.galleryContainer}>
      <GalleryView
        subHeading='Browse through our wedding gallery'
        contactInfo='Make an appointment for wedding event'
        buttonText='Request Event'
        images={images}
      />
      <Footer />
    </div>
  )
}

export default WeddingGallery
