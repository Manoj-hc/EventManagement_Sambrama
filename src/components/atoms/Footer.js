import React from 'react'
import styles from '../../../styles/Footer.module.css'
import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paraWrapper}>
        <p className={styles.logo}> Sambrama </p>
        <p className={styles.paragraph}>
          We are a team of youths who are committed 
          to make people’s special moments 
          beautiful & unforgettable 
          by providing all the event management solutions
        </p>
      </div>

      <div className={styles.addressCover}>
        <p className={styles.footerHead}> Address </p>
        <p className={styles.address}> ABC Complex, PQ Nagar, XYZ Road, Bengaluru </p>
        <p className={styles.phone}> Phone: +91 - 9182307465 </p>
        <p className={styles.email}> Email: sambramaevents@gmail.com </p>
      </div>

      <div>
        <p className={styles.footerHead}> Follow Us On </p>
        <div className={styles.iconContainer}>
          <AiOutlineInstagram className={styles.icon} size={20} />
          <AiFillLinkedin className={styles.icon} size={20} />
          <AiFillFacebook className={styles.icon} size={20} />
        </div>
      </div>
    </div>
  )
}

export default Footer
