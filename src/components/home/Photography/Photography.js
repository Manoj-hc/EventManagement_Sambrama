import React from 'react'
import Section from '../Section'
import { imagesCatalogue } from '../../../constants'

const Photography = () => {
  const images = [imagesCatalogue.wedding7, imagesCatalogue.wedding6, imagesCatalogue.wedding10]

  const heading = 'The eyes that capture your celebrations'
  const paragraph = `We have got experienced and pro level photographers to capture all the beautiful
  moments of events.`

  return (
    <Section 
      images={images}
      heading={heading}
      paragraph={paragraph}
      bgColor='#003D0A'
      buttonText='Know More'
      isReversed
    />
  )
}

export default Photography