import { Link } from 'react-router-dom';

export default function ArtigoCard({ article, styles }) {
  return (
    <div className={styles.cardArtigos}>
      <Link to={article.link}><img src={article.image} alt={article.alt} className={styles.cardImg} /></Link>
      <Link to={article.link} className={styles.cardTitle}>{article.title}</Link>
      <p className={styles.cardText}>{article.description}</p>
    </div>
  );
}
