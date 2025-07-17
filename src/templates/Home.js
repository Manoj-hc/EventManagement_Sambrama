import React, { Component } from 'react'
import styles from '../../styles/Home.module.css'
import Footer from '../components/atoms/Footer'
import AboutUs from '../components/home/AboutUs'
import AllServices from '../components/home/AllServices'
import Event from '../components/home/Event/Event'
import HeroSection from '../components/home/Hero/HeroSection'
import Invitation from '../components/home/Invitation/Invitation'
import Photography from '../components/home/Photography/Photography'
import Wedding from '../components/home/Wedding/Wedding'

class Home extends Component {
  render() {
    return (
      <div className={styles.welcomeContainer}>
        <HeroSection />
        <Invitation />
        <Wedding />
        <Event />
        <Photography />
        <AllServices />
        <AboutUs />
        <Footer />
      </div>
    )
  }
}

export default Home
