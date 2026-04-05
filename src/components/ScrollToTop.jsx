import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      // pega o container principal que realmente está visível
      const container = document.querySelector('.container') || document.querySelector('main');

      if (container) {
        // scroll suave para o topo do container visível
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback para window
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  }, [pathname]);

  return null;
}