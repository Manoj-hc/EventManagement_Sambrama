import React from 'react'
import Section from '../Section'
import { imagesCatalogue } from '../../../constants';

const Invitation = () => {
  const images = [imagesCatalogue.invitation2, imagesCatalogue.invitation3, imagesCatalogue.invitation1]

  const heading = 'We are pro Invitations Designers'
  const paragraph = `We design & craft invitations
  that are elegant & visually
  pleasing all at an affordable
  price with great quality.`
  const buttonText = 'Explore Designs';

  return (
    <Section
      images={images}
      heading={heading}
      paragraph={paragraph}
      bgColor='#390000'
      buttonText={buttonText}
    />
  )
}

export default Invitation