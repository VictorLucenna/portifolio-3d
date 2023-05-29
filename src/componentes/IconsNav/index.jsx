import React from 'react'
import styles from './IconsNav.module.css'
import { FaLinkedinIn, FaArtstation, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export default function IconsNav( { sizeIcon } ) {
    return (
        <nav className={styles.menuIcons} >

            <a href='https://www.linkedin.com/in/victor-lucena/' target="_blank"  ><FaLinkedinIn className={styles.rc} size={sizeIcon} color='#000000' /></a>
            <a href='mailto:victorlucenna@outlook.com' target="_blank"  ><AiOutlineMail className={styles.rc} size={sizeIcon} color='#000000' /></a>
            <a href='https://www.artstation.com/aval3d/' target="_blank"  ><FaArtstation className={styles.rc} size={sizeIcon} color='#000000' /></a>
            <a href='https://www.instagram.com/aval3d/' target="_blank"  ><FaInstagram className={styles.rc} size={sizeIcon} color='#000000' /></a>

        </nav>
    )
}
