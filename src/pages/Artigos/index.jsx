import styles from './Artigos.module.css';
import img1 from '../../assets/images/artigos/imgartigo1.png';
import img2 from '../../assets/images/artigos/imgartigo2.png';
import img3 from '../../assets/images/artigos/imgartigo3.png';
import ArtigoLista from '../../components/artigos/ArtigoLista.jsx';

const articles = [
  { title: 'CUIDADOS COM O BEBÊ', description: 'Tudo que você precisa saber para cuidar do seu bebê.', image: img1, alt: 'Cuidados com o bebê', link: '/cuidadosbebe' },
  { title: 'TENTANDO ENGRAVIDAR?', description: 'Quanto tempo demora a fecundação após a relação sexual?', image: img2, alt: 'Tentando engravidar?', link: '/tentandoengravidar' },
  { title: 'PERÍODO GESTACIONAL', description: 'Tudo que você precisa saber sobre o período gestacional!', image: img3, alt: 'Período Gestacional', link: '/periodogestacional' },
];

export default function Artigos() {
  return <section id='lista'><h2 className={styles.titulo}>Principais Artigos</h2><ArtigoLista articles={articles} styles={styles} /></section>;
}
