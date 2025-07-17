import React from 'react';
import Link from "next/link";
import styles from '../styles/admin.module.css'
import Logo from '../src/components/molecules/LogoSection.js'

const Admin = () => {

  return (
    <div className={styles.admin}>
    <Logo/>
    <div className={styles.heading}>Welcome back...</div>
      <div className={styles.container}>
        <div className={styles.conthead}>Admin Login</div>
        <div className={styles.inputcont}>
          <input type="text" className={styles.input} placeholder="Login ID"/>
          <input type="password" className={styles.input} placeholder="Password"/>
        </div>
        <div className={styles.button}>Login</div>
      </div>
    </div>
   )
}

export default Admin