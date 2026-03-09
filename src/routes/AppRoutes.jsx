import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/Home/index.jsx';
import BabyBuddyHome from '../pages/BabyBuddyHome/index.jsx';
import Cadastro from '../pages/Cadastro/index.jsx';
import CuidadosBebe from '../pages/CuidadosBebe/index.jsx';
import Ferramentas from '../pages/Ferramentas/index.jsx';
import PeriodoGestacional from '../pages/PeriodoGestacional/index.jsx';
import Seguranca from '../pages/Seguranca/index.jsx';
import Sobre from '../pages/Sobre/index.jsx';
import TentandoEngravidar from '../pages/TentandoEngravidar/index.jsx';
import TermosDeUso from '../pages/TermosDeUso/index.jsx';
import Features from '../pages/Features/index.jsx';
import Artigos from '../pages/Artigos/index.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/babybuddyhome' element={<BabyBuddyHome />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/cuidadosbebe' element={<CuidadosBebe />} />
          <Route path='/cuidados-bebe' element={<Navigate to='/cuidadosbebe' replace />} />
          <Route path='/ferramentas' element={<Ferramentas />} />
          <Route path='/periodogestacional' element={<PeriodoGestacional />} />
          <Route path='/periodo-gestacional' element={<Navigate to='/periodogestacional' replace />} />
          <Route path='/seguranca' element={<Seguranca />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/tentandoengravidar' element={<TentandoEngravidar />} />
          <Route path='/tentando-engravidar' element={<Navigate to='/tentandoengravidar' replace />} />
          <Route path='/termosdeuso' element={<TermosDeUso />} />
          <Route path='/features' element={<Features />} />
          <Route path='/artigos' element={<Artigos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
