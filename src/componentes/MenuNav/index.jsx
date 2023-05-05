import React from 'react'
import styles from './MenuNav.module.css'
import { NavLink } from 'react-router-dom';

export default function MenuNav() {
  return (
    <nav className={styles.menu}>

        <NavLink className={styles.link} to="/">3D Works</NavLink>
        <NavLink className={styles.link} to="/aboutme">About Me</NavLink>
        <NavLink className={styles.link} to="/contact">Contact</NavLink>

    </nav>
  )
}
