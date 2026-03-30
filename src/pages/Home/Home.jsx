import styles from './Home.module.css';
import imgGravida from '../../assets/imggravida.png';
import imgBackground from '../../assets/imgbackground.jpg';
export default function Home() {
  return (
    <div className={styles.home}>
      
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${imgBackground})` }}
      >
        <div className={styles.heroContainer}>

          <div className={styles.heroImg}>
            <img src={imgGravida} alt="Gestante" />
          </div>

          <div className={styles.heroText}>
            <h1>
              BabyBuddy seu app de monitoramento gestacional
            </h1>

            <p>
              O Baby Buddy é um aplicativo projetado para ajudar mães,
              especialmente as de primeira viagem, a acompanharem o
              desenvolvimento de seus bebês e gerenciarem a maternidade
              de forma eficiente.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}