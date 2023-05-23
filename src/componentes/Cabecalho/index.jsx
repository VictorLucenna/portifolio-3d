import React from 'react'
import styles from './Cabecalho.module.css'
// import Navegador from '../Navegador'
import capaImagem from './capa.jpg'

export default function Cabecalho() {
  return (
    <div className={styles.div}>
      <img className={styles.capa} src={capaImagem} alt="capa" />
      <div className={styles.texto}>
        <img className={styles.foto} src="assets/imagens/artist.jpg" alt="Artist" />
        <h1 className={styles.nome}>Victor Lucena</h1>
        <h4 className={styles.func} >Character Artist</h4>

      </div>

    </div>

    // <header className={styles.cabecalho}>Victor Lucena
    //   <img src="public/assets/imagens/capa.jpg" alt="capa" />
    // <Navegador></Navegador>
    // </header>

  )
}
