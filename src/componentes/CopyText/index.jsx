import React from 'react'
import { useState } from 'react';
import styles from './CopyText.module.css'
import { TbClipboardCopy } from 'react-icons/tb'

export default function CopyText({ text , icon }) {

    const [copied, setCopied] = useState(false)

    const [texto, setTexto] = useState(text);

    const copiarTexto = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto)
                .then(() => {
                    // alert('Texto copiado com sucesso!');
                })
                .catch((error) => {
                    alert('Erro ao copiar texto:', error);
                });
        } else {
            // Lógica alternativa para dispositivos sem suporte à API Clipboard
            const input = document.getElementById(text);
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand('copy');
            // alert('Texto copiado com sucesso!');
        }

        setCopied(true);
    };


    return (
        <div className={styles.div}>
            {icon}
            <input className={styles.input} type="text" id={text} value={texto} readOnly />
            <button className={styles.button} onClick={copiarTexto}><TbClipboardCopy color={copied === true ? '#2ca600' : '#ffffff'} size={20} /></button>
        </div>
    )
}
