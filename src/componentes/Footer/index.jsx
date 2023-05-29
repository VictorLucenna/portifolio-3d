import React from 'react'
import styles from './Footer.module.css'
import IconsNav from '../IconsNav'

export default function Footer() {
  return (
    <div className={styles.footer} >
      <div className={styles.copyR}>
        © Victor Lucena
      </div>
        <IconsNav size={20} />
    </div>
  )
}
