import styles from './Perfil.module.css';

import art3 from '../../assets/art3.svg';

import {
  FiClock,
  FiChevronDown,
} from 'react-icons/fi';

export default function Perfil() {

  // PEGA DADOS DO USUÁRIO
  const usuario = JSON.parse(
    localStorage.getItem('usuario')
  );

  // NOME DO USUÁRIO
  const nomeUsuario = usuario?.nome || 'Usuária';

  // ARTIGO DESTAQUE
  const destaque = {
    category: 'DESENVOLVIMENTO',
    title: 'Período Gestacional',
    time: '5 min de leitura',
    description:
      'Tudo que você precisa saber sobre o período  gestacional! Guia Completo com Tudo sobre Gravidez, Trimestres e Cuidados',
    image: art3,
  };

  // CARDS GESTAÇÃO
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

  // CARDS MAIS LIDOS
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

  // RENDERIZA CARDS
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

        <div className={styles.logoArea}>
          <h1>
            Olá, <span>{nomeUsuario}!</span> 👋
          </h1>

          <p>
            Conteúdos feitos com amor para apoiar você
            em cada fase da gestação.
          </p>
        </div>

        <div className={styles.user}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Foto da usuária"
          />

          <FiChevronDown />
        </div>

      </header>

      {/* CATEGORIAS */}
      <section className={styles.categories}>

        <button className={styles.active}>
          Todos
        </button>

        <button>Nutrição</button>

        <button>Bebê</button>

        <button>Desenvolvimento</button>

        <button>Bem-estar</button>

        <button>Exercícios</button>

      </section>

      {/* ARTIGO DESTAQUE */}
      <section className={styles.featured}>

        <div className={styles.featuredImage}>
          <img
            src={destaque.image}
            alt={destaque.title}
          />
        </div>

        <div className={styles.featuredContent}>

          <span>
            {destaque.category}
          </span>

          <h2>
            {destaque.title}
          </h2>

          <p>
            {destaque.description}
          </p>

          <div className={styles.featuredFooter}>

            <div className={styles.time}>
              <FiClock />

              <p>{destaque.time}</p>
            </div>

            <button type="button">
              Ler agora
            </button>

          </div>

        </div>

      </section>

      {/* SEÇÃO 1 */}
      <section className={styles.section}>

        <div className={styles.sectionHeader}>
          <h2>
            Para esta fase da gestação
          </h2>
        </div>

        <div className={styles.cards}>
          {renderCards(gestacaoCards)}
        </div>
      </section>



      {/* SEÇÃO 2 */}
      <section className={styles.section}>

        <div className={styles.sectionHeader}>
          <h2>
            Mais lidos pelas mamães
          </h2>
        </div>

        <div className={styles.cards}>
          {renderCards(maisLidosCards)}
        </div>

      </section>

    </main>
  );
}