import React from 'react'
// import posts from '../../assets/json/posts.json'
import styles from './Inicio.module.css'
import Card from '../../componentes/Card'

export default function Inicio() {
  return (
    <div className={styles.container}>
      <div className={styles.galeria}>
        <Card id="01" />
        <Card id="02" />
        <Card id="03" />
      </div>
    </div>
  )
}
