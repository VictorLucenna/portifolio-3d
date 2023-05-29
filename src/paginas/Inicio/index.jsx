import React from 'react'
import styles from './Inicio.module.css'
import Card from '../../componentes/Card'
import posts from '../../assets/json/posts.json'
import Footer from '../../componentes/Footer'

export default function Inicio() {
  return (
    <div className={styles.container}>
      <div className={styles.galeria}>
        <Card id="01" />
        <Card id="02" />
        <Card id="03" />
        <Card id="04" />
        <Card id="05" />
        {posts.map(post => <Card key={post.id} id={`${post.id}`} />)}
        {posts.map(post => <Card key={post.id} id={`${post.id}`} />)}
      </div>

      <Footer />
    </div>
  )
}
