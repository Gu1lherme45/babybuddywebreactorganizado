import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import ScrollToTop from '../components/ScrollToTop';

// páginas
import Home from '../pages/Home/Home';
import Cadastro from '../pages/Cadastro/Cadastro';

import PeriodoGestacional from '../pages/PeriodoGestacional/PeriodoGestacional';
import CuidadosBebe from '../pages/CuidadosBebe/CuidadosBebe';
import TentandoEngravidar from '../pages/TentandoEngravidar/TentandoEngravidar';

// 👇 IMPORT DO QUESTIONÁRIO
import Questionario from '../pages/Questionario/Questionario';

import PoliticaDePrivacidade from '../pages/PoliticaDePrivacidade/PoliticaDePrivacidade';
import TermosDeUso from '../pages/TermosDeUso/TermosDeUso';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/periodo-gestacional" element={<PeriodoGestacional />} />
          <Route path="/cuidados-bebe" element={<CuidadosBebe />} />
          <Route path="/tentando-engravidar" element={<TentandoEngravidar />} />

          {/* 👇 NOVA ROTA DO QUESTIONÁRIO */}
          <Route path="/questionario" element={<Questionario />} />

          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}