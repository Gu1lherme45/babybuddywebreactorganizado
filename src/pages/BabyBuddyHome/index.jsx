import capahome from '../../assets/images/home/capahome.png';
import styles from './BabyBuddyHome.module.css';

export default function BabyBuddyHome() {
  return (
    <section id='babyBuddyHome' className={styles['babybuddy-section']} aria-label='Funcionalidades do aplicativo BabyBuddy'>
      <div className={styles.container}>
        <div className={styles['image-side']}><img src={capahome} alt='Tela inicial do app BabyBuddy em um celular' /></div>
        <div className={styles['content-side']}>
          <h2>O que posso fazer com o aplicativo <span>BabyBuddy</span>?</h2>
          <div className={styles['card-babybuddy']}><h3>Acompanhe sua gravidez</h3><p>O BabyBuddy facilita o acompanhamento da sua gestação, oferecendo informações personalizadas e suporte diário para uma jornada mais tranquila e informada.</p></div>
          <div className={styles['card-babybuddy']}><h3>Cuide de você</h3><p>Cuidar de si mesma durante a gravidez é essencial para garantir saúde e bem-estar para você e seu bebê.</p></div>
          <div className={styles['card-babybuddy']}><h3>Monitore o desenvolvimento do bebê</h3><p>Acompanhe cada etapa do crescimento do seu bebê com dicas e informações relevantes para cada fase.</p></div>
        </div>
      </div>
    </section>
  );
}
