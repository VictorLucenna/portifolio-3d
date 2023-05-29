import React from 'react'
import Container from '../../componentes/Container'
// import styles from './Contato.module.css'
import IconsNav from '../../componentes/IconsNav'
import CopyText from '../../componentes/CopyText'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

export default function Contato() {

  const size = 27;

  return (
    <Container>
      <div>

        <h2>Feel free to contact me.</h2>

        <CopyText icon={<AiFillPhone size={size}/>} text={"+55 82 99810-6971"} />
        <CopyText icon={<AiOutlineMail size={size}/>}text={"victorlucenna@outlook.com"} />

        <IconsNav sizeIcon={25} />

      </div>

    </Container>
  )
}
