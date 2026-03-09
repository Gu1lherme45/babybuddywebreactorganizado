import styles from './Features.module.css';
import facilidadeImg from '../../assets/images/features/facilidade.png';
import compartilhamentoImg from '../../assets/images/features/compartilhamento.png';
import privacidadeImg from '../../assets/images/features/privacidade.png';

export default function Features() {
  return (
    <section id='lista' className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}><img src={facilidadeImg} alt='Facilidade' className={styles.featureImg} /><h3>Facilidade</h3><p>O BabyBuddy traz praticidade ao reunir todas as informações e atualizações da gravidez em um só lugar, tornando o acompanhamento simples e a jornada mais tranquila.</p></div>
        <div className={styles.featureCard}><img src={compartilhamentoImg} alt='Compartilhamento com o parceiro' className={styles.featureImg} /><h3>Compartilhamento com o parceiro</h3><p>Compartilhe o progresso da gestação com seu parceiro através do app, fortalecendo o vínculo e garantindo que ambos estejam informados e envolvidos em cada etapa.</p></div>
        <div className={styles.featureCard}><img src={privacidadeImg} alt='Privacidade' className={styles.featureImg} /><h3>Privacidade</h3><p>Com o BabyBuddy, você tem total controle. Suas informações pessoais ficam seguras, e seus dados de saúde nunca serão compartilhados fora do aplicativo.</p></div>
      </div>
    </section>
  );
}
