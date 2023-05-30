import React from 'react'
import styles from './Cabecalho.module.css'
import capaImagem from './capa.jpg'
import { useLocation } from 'react-router-dom'

export default function Cabecalho() {

  const location = useLocation();
  const aboutMe = location.pathname === '/aboutme';

  return (
    <div className={`${styles.div} ${aboutMe ? styles.divAboutMe : ""} `}>
      <div className={styles.dg}></div>
      <img className={styles.capa} src={capaImagem} alt="capa" />
      <div className={styles.texto}>
        <img
          className={`${styles.foto} ${aboutMe ? styles.fotoAboutMe : ""}`}
          src="assets/imagens/artist.jpg"
          alt="Artist"
        />
        <h1 className={styles.nome}>Victor Lucena</h1>
        <h4 className={styles.func} >Character Artist | 3D Artist</h4>

      </div>


    </div>


  )
}
