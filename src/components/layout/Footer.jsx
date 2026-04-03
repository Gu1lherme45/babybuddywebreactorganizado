import styles from './Footer.module.css';
import logo from '../../assets/logo1.png';

export default function Footer() {
  return (

    <footer className={styles.footer}>

      {/* 🌊 ONDA NO TOPO (cor da section de cima = branco) */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={styles.footerWave}
      >
        <path
          d="M0,40C120,80,240,80,360,60C480,40,600,0,720,0C840,0,960,40,1080,60C1200,80,1320,80,1440,40L1440,0L0,0Z"
          fill="#ffffff"
        />
      </svg>

      <div className={styles.container}>
        
        {/* Logo + Stores */}
        <div className={styles.left}>
          <img src={logo} alt="BabyBuddy Logo" className={styles.logo} />

          <div className={styles.stores}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className={styles.storeIcon}
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className={styles.storeIcon}
            />
          </div>
        </div>
 
        {/* Links */}
        <div className={styles.links}>
          
          <div>
            <h4>PRODUTO</h4>
            <a href="#">Segurança</a>
            <a href="#">Contato</a>
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

      {/* Copyright */}
      <div className={styles.bottom}>
        © 2026 BabyBuddy — Todos os direitos reservados.
      </div>

    </footer>
  );
}