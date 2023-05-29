import React from 'react'
import styles from './MenuNav.module.css'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MenuNav() {

  const location = useLocation().pathname;
  
  return (
    <nav className={styles.menu}>

        <NavLink className={`${styles.link} ${ location === '/' ? styles.linkSubli : "" }`} to="/">Works</NavLink>
        <NavLink className={`${styles.link} ${ location === '/aboutme' ? styles.linkSubli : "" }`} to="/aboutme">About Me</NavLink>
        <NavLink className={`${styles.link} ${ location === '/contact' ? styles.linkSubli : "" }`} to="/contact">Contact</NavLink>

    </nav>
  )
}
