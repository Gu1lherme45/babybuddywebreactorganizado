import styles from './Home.module.css';
import imgGravida from '../../assets/imggravida.png';
import imgBackground from '../../assets/imgbackground.jpg';
import imgMobile from '../../assets/imgmobile.png';
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import facilidade from "../../assets/facilidade.png";
import informacoes from "../../assets/informações.png";
import privacidade from "../../assets/privacidade.png";

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
  <div className={styles.containerFeatures}>
    
    <div className={styles.featureItem}>
      <img src={facilidade} alt="Facilidade" />
      <h3>Facilidade</h3>
      <p>
        O BabyBuddy traz praticidade ao reunir todas as informações e
        atualizações da gravidez em um só lugar, tornando o acompanhamento
        simples e a jornada mais tranquila.
      </p>
    </div>

    <div className={styles.featureItem}>
      <img src={informacoes} alt="Informações confiáveis" />
      <h3>Informações Confiáveis para cada Etapa</h3>
      <p>
        Receba conteúdos pensados para cada momento da gestação, com
        orientações que ajudam a tirar dúvidas e trazer mais segurança durante
        toda a jornada.
      </p>
    </div>

    <div className={styles.featureItem}>
      <img src={privacidade} alt="Privacidade" />
      <h3>Privacidade</h3>
      <p>
        Com o BabyBuddy, você tem controle total. Suas informações pessoais
        ficam seguras e seus dados de saúde nunca serão compartilhados fora do
        aplicativo.
      </p>
    </div>

  </div>
 
<div className={styles.nuvens}>
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">

    {/* camada mais clara (fundo) */}
    <path
      fill="#fff0f5"
      d="M0,224C120,192,240,160,360,165.3C480,171,600,213,720,224C840,235,960,213,1080,192C1200,171,1320,149,1440,144V320H0Z"
    />

    {/* camada intermediária */}
    <path
      fill="#ffd6e0"
      d="M0,256C120,240,240,208,360,202.7C480,197,600,229,720,240C840,251,960,240,1080,224C1200,208,1320,192,1440,176V320H0Z"
    />

    {/* camada principal (frente) */}
    <path
      fill="#f8a5b6"
      d="M0,288C120,272,240,240,360,234.7C480,229,600,261,720,272C840,283,960,261,1080,245.3C1200,229,1320,208,1440,192V320H0Z"
    />

  </svg>
</div>

</section>













 {/* SECTION 3 */}
<section id="artigoshome" className={styles.sectionArtigos}>
  <div className={styles.artigosContainer}>
    
    <h2 className={styles.artigosTitle}>Principais Artigos</h2>

    <div className={styles.artigosGrid}>

      {/* CARD 1 */}
      <div className={styles.artigoCard}>
        <img src={art1} alt="Cuidados com o bebê" />
        <h3>CUIDADOS COM O BEBÊ</h3>
        <p> Tudo que você precisa saber para cuidar do seu bebê.</p>
      </div>

      {/* CARD 2 */}
      <div className={styles.artigoCard}>
        <img src={art2} alt="Tentando engravidar" />
        <h3>TENTANDO ENGRAVIDAR?</h3>
        <p>Quanto tempo demora a fecundação após a relação sexual?</p>
      </div>

      {/* CARD 3 */}
      <div className={styles.artigoCard}>
        <img src={art3} alt="Período gestacional" />
        <h3>PERÍODO GESTACIONAL</h3>
        <p>Tudo que você precisa saber sobre o período gestacional!</p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}