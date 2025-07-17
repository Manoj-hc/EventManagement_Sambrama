import React from 'react'
import Section from '../Section'
import { imagesCatalogue } from '../../../constants'

const Event = () => {
 const images = [imagesCatalogue.wedding12, imagesCatalogue.wedding4, imagesCatalogue.wedding9]
  const heading = 'Just beautiful & memorable events.'
  const paragraph = `Birthday events, corporate
  events, music events, etc..
  You name it ! We got you covered with all of them.`

  return (
    <Section 
      images={images}
      heading={heading}
      paragraph={paragraph}
      bgColor='#003538'
      buttonText='Have A Glance'
    />
  )
}

export default Event