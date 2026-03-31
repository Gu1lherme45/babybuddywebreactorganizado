import styles from './Footer.module.css';
import logo from '../../assets/logo-babybuddy3.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LOGO + TEXTO */}
        <div className={styles.left}>
          <img src={logo} alt="BabyBuddy" className={styles.logo} />
          <p className={styles.slogan}>
            Conheça o seu corpo.<br />
            Proteja sua saúde.
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>

          <div>
            <h4>PRODUTO</h4>
            <a href="#">Segurança</a>
            <a href="#">Centro de Ajuda</a>
          </div>

          <div>
            <h4>CONTEÚDO</h4>
            <a href="#">Artigos</a>
            <a href="#">Cadastro</a>
          </div>

          <div>
            <h4>PRIVACIDADE</h4>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.copy}>
        © 2026 BabyBuddy — Todos os direitos reservados.
      </div>
    </footer>
  );
}