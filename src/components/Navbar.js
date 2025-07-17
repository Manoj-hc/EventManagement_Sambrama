import React from 'react'
import styles from '../../styles/Navbar.module.css'
import { navigations } from '../constants'
import NavButton from './molecules/NavButton'

const Navbar = ({ closeNav, setNavigation }) => {
  const navLabels = Object.values(navigations)
  return (
    <div className={styles.navbarContainer}>
      <NavButton onClick={() => closeNav()} />
      <div className={`container ${styles.listWrapper}`}>
        {navLabels.map((item, index) => {
          return (
            <li onClick={() => setNavigation(item)} className={styles.list} key={index}> {item} </li>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
