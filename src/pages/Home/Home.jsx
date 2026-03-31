import styles from './Home.module.css';
import imgGravida from '../../assets/imggravida.png';
import imgBackground from '../../assets/imgbackground.jpg';
import imgMobile from '../../assets/imgmobile.png';

export default function Home() {
  return (
    <div className={styles.home}>
      
      {/* HERO */}
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

  {/* SECTION 1 */}
<section id="babybuddyhome" className={styles.sectionBaby}>
  <div className={styles.babyContainer}>

    <h2 className={styles.babyTitle}>
      O que posso fazer com o aplicativo BabyBuddy?
    </h2>

    <div className={styles.babyContent}>

      {/* IMAGEM CELULAR */}
      <img src={imgMobile} alt="App BabyBuddy" />

      {/* CARDS */}
      <div className={styles.babyCards}>

        <div className={styles.card}>
          <h3>Cuide de você</h3>
          <p>
            Cuide da sua gravidez com amor e atenção para garantir uma jornada
            saudável e feliz para você e seu bebê.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Acompanhe sua gravidez</h3>
          <p>
            Cuidar de si mesma durante a gravidez é essencial para garantir
            saúde e bem-estar para você e seu bebê.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Por que usar o BabyBuddy?</h3>
          <p>
            O BabyBuddy facilita o acompanhamento da sua gestação, oferecendo
            informações personalizadas e suporte diário.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* SECTION 2 */}
      <section id="featureshome" className={styles.sectionFeatures}>
        <div className={styles.sectionContent}>
          <h2>Features</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="artigoshome" className={styles.sectionArtigos}>
        <div className={styles.sectionContent}>
          <h2>Artigos</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

    </div>
  );
}