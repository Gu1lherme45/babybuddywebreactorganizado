import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import Cadastro from '../pages/Cadastro/Cadastro';

import PeriodoGestacional from '../pages/PeriodoGestacional/PeriodoGestacional';
import CuidadosBebe from '../pages/CuidadosBebe/CuidadosBebe';
import TentandoEngravidar from '../pages/TentandoEngravidar/TentandoEngravidar';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/periodo-gestacional" element={<PeriodoGestacional />} />
          <Route path="/cuidados-bebe" element={<CuidadosBebe />} />
          <Route path="/tentando-engravidar" element={<TentandoEngravidar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}