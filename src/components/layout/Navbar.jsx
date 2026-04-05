import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        <div className={styles.links}>
          <Link to="/#inicio">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/#artigoshome">Artigos</Link>
        </div>

        <div className={styles.button}>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>

      </div>
    </nav>
  );
}