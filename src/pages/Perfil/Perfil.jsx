import styles from './Perfil.module.css';

import {
  FiClock,
  FiChevronRight,
  FiChevronDown,
  FiArrowRight,
} from 'react-icons/fi';

export default function Perfil() {
  const gestacaoCards = [
    {
      category: 'DESENVOLVIMENTO',
      title: 'Mudanças no corpo durante o 2º trimestre',
      time: '5 min de leitura',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'BEBÊ',
      title: 'Como seu bebê cresce semana a semana',
      time: '6 min de leitura',
      image:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'NUTRIÇÃO',
      title: 'Alimentação que nutre você e seu bebê',
      time: '4 min de leitura',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'BEM-ESTAR',
      title: 'Ansiedade na gravidez: como lidar no dia a dia',
      time: '7 min de leitura',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const maisLidosCards = [
    {
      category: 'SAÚDE',
      title: 'Vitaminas e suplementos essenciais na gestação',
      time: '5 min de leitura',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'BEM-ESTAR',
      title: 'Dicas para melhorar o sono durante a gravidez',
      time: '4 min de leitura',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'EXAMES',
      title: 'Principais exames durante a gestação',
      time: '6 min de leitura',
      image:
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    },
    {
      category: 'ATIVIDADE FÍSICA',
      title: 'Exercícios seguros para cada fase da gestação',
      time: '5 min de leitura',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <article className={styles.card} key={index}>
        <img
          src={card.image}
          alt={card.title}
          className={styles.cardImage}
        />

        <div className={styles.cardContent}>
          <span className={styles.category}>
            {card.category}
          </span>

          <h3>{card.title}</h3>

          <div className={styles.time}>
            <FiClock />

            <p>{card.time}</p>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <main className={styles.container}>
      {/* TOPO */}
      <header className={styles.topBar}>
        <div className={styles.user}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Foto da usuária"
          />

          <div className={styles.userInfo}>
            <span>Olá, Juliana!</span>

            <FiChevronDown />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Olá, <span>Juliana!</span> 💕
          </h1>

          <p>
            Que bom ter você aqui! Continue cuidando de
            cada detalhe da sua gestação com amor,
            carinho e informação de qualidade.
          </p>
        </div>

        <div className={styles.heroBanner}></div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Para esta fase da gestação</h2>

          <button type="button">
            Ver todos
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.cards}>
          {renderCards(gestacaoCards)}

          <button
            type="button"
            className={styles.arrowButton}
          >
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Mais lidos pelas mamães</h2>

          <button type="button">
            Ver todos
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.cards}>
          {renderCards(maisLidosCards)}

          <button
            type="button"
            className={styles.arrowButton}
          >
            <FiArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}