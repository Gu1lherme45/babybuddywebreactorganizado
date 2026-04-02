import { Link } from "react-router-dom";
import styles from './Home.module.css';
import imgGravida from '../../assets/gravida.svg';
import imgMobile from "../../assets/mobile.svg";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import facilidade from "../../assets/facilidade.png";
import informacoes from "../../assets/informações.png";
import privacidade from "../../assets/privacidade.png";
import nuvens from "../../assets/nuvens.svg";

export default function Home() {
  return (
    <div className={styles.home}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.left}>
            <img src={imgGravida} alt="Gestante" />
          </div>

          <div className={styles.right}>
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
      </section>










<section id="babybuddyhome" className={styles.sectionBaby}>
  <div className={styles.babyContainer}>

    <h2 className={styles.babyTitle}>
      O que posso fazer com o aplicativo BabyBuddy?
    </h2>

    <div className={styles.babyContent}>

<div className={styles.babyImg}>
  <img src={imgMobile} alt="App BabyBuddy" />
</div>

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
      </section>










      {/* SECTION 3 */}
      <section id="artigoshome" className={styles.sectionArtigos}>
        <div className={styles.artigosContainer}>
          
          <h2 className={styles.artigosTitle}>Principais Artigos</h2>

          <div className={styles.artigosGrid}>
           <Link to="/cuidados-bebe" className={styles.artigoCard}>
           <img src={art1} alt="Cuidados com o bebê" />
           <h3>CUIDADOS COM O BEBÊ</h3>
           <p> Tudo que você precisa saber para cuidar do seu bebê.</p>
         </Link>

         <Link to="/tentando-engravidar" className={styles.artigoCard}>
           <img src={art2} alt="Tentando engravidar" />
          <h3>TENTANDO ENGRAVIDAR?</h3>
          <p>Quanto tempo demora a fecundação após a relação sexual?</p>
         </Link>

        <Link to="/periodo-gestacional" className={styles.artigoCard}>
         <img src={art3} alt="Período gestacional" />
         <h3>PERÍODO GESTACIONAL</h3>
         <p>Tudo que você precisa saber sobre o período gestacional!</p>
        </Link>

          </div>
        </div>
      </section>

    </div>
  );
}