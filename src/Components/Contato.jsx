import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>contato@email.com</li>
          <li>(99) 9999-9999</li>
          <li>Rua Qualquer, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
