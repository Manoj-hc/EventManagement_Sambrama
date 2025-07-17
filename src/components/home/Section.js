import React from 'react'
import styles from '../../../styles/Section.module.css'
import ButtonText from '../molecules/ButtonText'
import Link from "next/link";

const Section = ({ 
  images, 
  paragraph, 
  heading, 
  bgColor, 
  isReversed,
  buttonText
}) => {
  return (
  <div>
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor,
        flexDirection: isReversed ? 'row-reverse' : 'row'
      }}
    >
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}> {heading} </h1>
      </div>
      <div className={styles.imageContainer}>
        {images.map((item) => {
          return (
            <div
              key={item}
              className={styles.image}
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )
        })}
      </div>
      <div className={styles.pWrapper}>
        <p className={styles.paragraph}>
          {paragraph}
        </p>
        <Link href="/invitation_gallery"><ButtonText text={buttonText} /></Link>
      </div>
    </div>
    <div
      className={styles.container2}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}> {heading} </h1>
      </div>
      <div className={styles.imageContainer}>
        {images.map((item) => {
          return (
            <div
              key={item}
              className={styles.image}
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )
        })}
      </div>
      <div className={styles.pWrapper}>
        <p className={styles.paragraph}>
          {paragraph}
        </p>
        <Link href="/invitation_gallery"><ButtonText text={buttonText} /></Link>
      </div>
    </div>
  </div>
  )
}

export default Section