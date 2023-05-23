import React from 'react'
import styles from './Cabecalho.module.css'
// import Navegador from '../Navegador'
// import capaImagem from './capa.jpg'

export default function Cabecalho() {
  return (
    <div className={styles.div}>
      {/* <img className={styles.capa} src={capaImagem} alt="capa" /> */}
      <div className={styles.texto}>
        <h1 className={styles.titulo}>Victor Lucena</h1>
        <h3 className={styles.h3} >3D Artist</h3>

      </div>

    </div>

    // <header className={styles.cabecalho}>Victor Lucena
    //   <img src="public/assets/imagens/capa.jpg" alt="capa" />
    // <Navegador></Navegador>
    // </header>

  )
}
