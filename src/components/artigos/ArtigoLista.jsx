import ArtigoCard from './ArtigoCard.jsx';

export default function ArtigoLista({ articles, styles }) {
  return <div className={styles.containerCards}>{articles.map((article) => <ArtigoCard key={article.title} article={article} styles={styles} />)}</div>;
}
