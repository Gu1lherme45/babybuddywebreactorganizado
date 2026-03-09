import styles from './CuidadosBebe.module.css';
import gravida from '../../assets/images/home/gravida.png';
import facilidades from '../../assets/images/features/facilidade.png';
import compartilhamento from '../../assets/images/features/compartilhamento.png';

const cards = [
  { image: gravida, alt: 'Gestante', text: 'Dicas para gestantes' },
  { image: facilidades, alt: 'Facilidades', text: 'Facilidades para o dia a dia' },
  { image: compartilhamento, alt: 'Compartilhamento', text: 'Compartilhe informações importantes' },
];

export default function CuidadosBebe() {
  return <div className={styles.cuidados}><section className={styles.hero}><nav className={styles.breadcrumb}>Artigos &gt; Cuidados com o bebê</nav><h1 className={styles.title}>Cuidados com o bebê: tudo que você precisa saber de 0 a 1 ano</h1><p className={styles.intro}>O primeiro ano de vida de um bebê é cheio de descobertas, desenvolvimento rápido e aprendizados. Garantir cuidados adequados ajuda na saúde, segurança e bem-estar da criança.</p><div className={styles.metaInfo}>🕒 12 min de leitura</div></section><section className={styles.articleSection}><div className={styles.medicalReview}>Revisão por <strong>Equipe BabyBuddy</strong>, com informações baseadas em pediatria e recomendações oficiais de saúde.</div><div className={styles.reviewBox}><p className={styles.reviewLabel}>✅ Padrões de verificação de fatos</p><p className={styles.reviewText}>Todo o conteúdo deste artigo segue recomendações de pediatras, guias de saúde infantil e dados atualizados de instituições de referência em saúde da criança.</p></div><div className={styles.textBlock}><h2>Principais pontos sobre cuidados com o bebê</h2><ul><li>Alimentação adequada nos primeiros meses é essencial para crescimento e imunidade.</li><li>Banho, higiene e cuidado com roupas influenciam diretamente na saúde da pele e conforto do bebê.</li><li>Consultas médicas regulares ajudam a monitorar crescimento, vacinação e desenvolvimento.</li><li>O primeiro ano é crítico para criar rotinas saudáveis, conforto emocional e vínculos familiares.</li></ul></div></section><section className={styles.cards}>{cards.map((card) => <div key={card.text} className={styles.card}><img src={card.image} alt={card.alt} /><p>{card.text}</p></div>)}</section></div>;
}
