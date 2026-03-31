import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        <div className={styles.links}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#artigos">Artigos</a>
        </div>

        <div className={styles.button}>
          <a href="/cadastro">Cadastre-se</a>
        </div>

      </div>
    </nav>
  );
}