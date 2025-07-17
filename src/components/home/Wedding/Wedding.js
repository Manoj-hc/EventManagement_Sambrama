import React from 'react'
import Section from '../Section'
import { imagesCatalogue } from '../../../constants'

const Wedding = () => {
  const images = [imagesCatalogue.wedding7, imagesCatalogue.wedding5, imagesCatalogue.wedding12]
  const heading = 'Let us get you married in a heaven like place !'
  const paragraph = `We take extreme care with pleasure  to create a place that feels 
  heavenly for you to get married with tons of 
  beautiful memories.`;

  return (
    <Section 
      images={images}
      heading={heading}
      paragraph={paragraph}
      bgColor='#3A1700'
      buttonText='See our past works'
      isReversed
    />
  )
}

export default Wedding