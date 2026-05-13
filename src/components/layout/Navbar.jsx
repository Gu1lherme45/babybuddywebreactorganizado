import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // detecta a página do questionário
  const isQuestionario = location.pathname === "/questionario";

  // se estiver no questionário, NÃO mostra a navbar
  if (isQuestionario) return null;

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