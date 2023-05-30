import React from 'react'
import styles from './Inicio.module.css'
import Card from '../../componentes/Card'
import posts from '../../assets/json/posts.json'
import Footer from '../../componentes/Footer'

export default function Inicio() {
  return (
    <div className={styles.container}>
      <div className={styles.galeria}>
        {posts.map(post => <Card key={post.id} id={`${post.id}`} />)}
      </div>

      <Footer />
    </div>
  )
}
