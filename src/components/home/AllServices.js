import React from 'react'
import styles from '../../../styles/AllServices.module.css'
import ButtonText from '../molecules/ButtonText1'
import { imagesCatalogue } from '../../constants'



const AllServices = () => {
  const images = [
    {
      heading: 'You can also choose us for',
      buttonText: 'Explore Events >>',
      labelHeading: 'Fashion Designing',
      label: 'Best in class & stylish',
      image: imagesCatalogue.wedding2,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'Musical Events',
      label: 'Profeshional Artists',
      image: imagesCatalogue.wedding19,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'Catering Services',
      label: 'Delicious & Healthy Delight',
      image: imagesCatalogue.wedding17,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'Beauty Parlour',
      label: 'Best in class beauty treatment',
      image: imagesCatalogue.wedding14,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'Photography',
      label: 'Unforgettable Memories',
      image: imagesCatalogue.wedding15,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'Lightings',
      label: 'Best ambient lighting decor',
      image: imagesCatalogue.wedding16,
    },
    {
      heading: '',
      buttonText: '',
      labelHeading: 'DJ Parties',
      label: 'Thumping bass & treble',
      image: imagesCatalogue.wedding18,
    },
  ]
  
  return (
    <div className={styles.container}>
      {images.map((item, index) => {
        return (
          <div key={index} className={styles.image} style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
            <div className={styles.contentWrapper} >
              <h1 className={styles.heading}> {item.heading} </h1>
              <div className={styles.labelButtonWrapper}>
                <div className={styles.labelContainer}>
                  <p className={styles.labelHeading}> {item.labelHeading} </p>
                  <p className={styles.label}> {item.label} </p>
                </div>
                {item.buttonText ? <ButtonText text={item.buttonText} /> : null}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllServices
