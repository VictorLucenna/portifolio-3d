import React from 'react'
import styles from './Card.module.css'
import posts from '../../assets/json/posts.json'

export default function Card( {id} ) {
  return (
    <div className={styles.card}>
          <img className={styles.fold} src={`assets/posts/${id}/capa.jpg`} alt="Foto da capa" />
          <div className={styles.bf}>
            <h5 className={styles.bfText}> {posts.map(post => post.id === id ? post.titulo : "" )} </h5>
          </div>
        </div>
  )
}
