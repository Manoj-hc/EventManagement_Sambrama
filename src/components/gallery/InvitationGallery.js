import React from 'react'
import styles from '../../../styles/GalleryView.module.css'
import Footer from '../atoms/Footer'
import GalleryView from '../atoms/GalleryView'
import {imagesCatalogue} from '../../constants'

const InvitationGallery = () => {
 const images = [
    imagesCatalogue.invitation1,
    imagesCatalogue.invitation2,
    imagesCatalogue.invitation3,
    imagesCatalogue.invitation2,
    imagesCatalogue.invitation1,
    imagesCatalogue.invitation1,
    imagesCatalogue.invitation3,
    imagesCatalogue.invitation1,
    imagesCatalogue.invitation3,
    imagesCatalogue.invitation2,
  ];

  return (
    <div className={styles.galleryContainer}>
      <GalleryView
        subHeading='Browse through our invitation card designs'
        contactInfo='Wow your guests with a stunning invitation card'
        buttonText='Request a design'
        images={images}
      />
      <Footer />
    </div>
  )
}

export default InvitationGallery
