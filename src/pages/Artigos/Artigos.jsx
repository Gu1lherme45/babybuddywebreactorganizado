import styles from './Artigos.module.css';
import { Link } from 'react-router-dom';

import artigos from './artigosData';

export default function Artigos() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <span>GUIA MATERNIDADE</span>

        <h1>
          Artigos completos sobre gravidez, maternidade e cuidados com o bebê
        </h1>

        <p>
          Conteúdos desenvolvidos para ajudar mães e famílias em cada etapa
          da gestação e desenvolvimento do bebê.
        </p>
      </div>

      <div className={styles.grid}>
        {artigos.map((artigo) => (
          <Link
            to={artigo.link}
            className={styles.card}
            key={artigo.id}
          >
            <img src={artigo.image} alt={artigo.title} />

            <div className={styles.content}>
              <span>{artigo.category}</span>

              <h2>{artigo.title}</h2>

              <p>{artigo.description}</p>

              <button>Ler artigo</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}