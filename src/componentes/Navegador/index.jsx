import { NavLink } from 'react-router-dom'
import styles from './Navegador.module.css'

import React from 'react'

export default function Navegador() {
    return (<div className={styles.navegador}>

        <NavLink className={styles.link}>Works</NavLink>
        <NavLink className={styles.link}>About Me</NavLink>
        <NavLink className={styles.link}>Contact</NavLink>
    </div>
    )
}
