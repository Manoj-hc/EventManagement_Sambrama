import React from 'react'
import styles from '../../../styles/AboutUs.module.css'
import { imagesCatalogue } from '../../constants'

const About = () => (
  <div className={styles.aboutUsWrapper}>
    <div className={styles.image}><img src={imagesCatalogue.wedding20}></img></div>
    <div className={styles.content}>
      <h1 className={styles.heading}> About Us </h1>
      <p className={styles.paragraph}> Founded in 2021, Elegant Event Decorations & Catering 
        is a family owned and operated business with a reputation.
        <br />
        <br />
        Our family and team have extensive experience in creating 
        unforgettable events for each one of our clients. 
        We all love what we do and it shows, 
        even in the most subtle details.
      </p>
    </div>
  </div>
)

export default About
