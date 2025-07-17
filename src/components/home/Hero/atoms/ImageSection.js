import React from 'react'
import GridView from '../../../atoms/GridView'
import { imagesCatalogue } from '../../../../constants'

const ImageSection = () => {
  const images = [
    imagesCatalogue.wedding1, imagesCatalogue.wedding2, imagesCatalogue.wedding3, imagesCatalogue.wedding4, imagesCatalogue.wedding5, imagesCatalogue.wedding6, imagesCatalogue.wedding7, imagesCatalogue.wedding9, imagesCatalogue.wedding10, imagesCatalogue.wedding3, imagesCatalogue.wedding10, imagesCatalogue.wedding2, imagesCatalogue.wedding3, imagesCatalogue.wedding4, imagesCatalogue.wedding5, imagesCatalogue.wedding6, imagesCatalogue.wedding7, imagesCatalogue.wedding8, imagesCatalogue.wedding10, imagesCatalogue.wedding3, imagesCatalogue.wedding10
  ]
  return (
    <GridView images={images} noLogo />
  )
}

export default ImageSection