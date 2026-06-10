import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import ScrollToTop from '../components/ScrollToTop';

import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Cadastro from '../pages/Cadastro/Cadastro';
import Login from '../pages/Login/Login';
import Perfil from '../pages/Perfil/Perfil';
import Administrador from '../pages/Administrador/Administrador';


import PeriodoGestacional from '../pages/PeriodoGestacional/PeriodoGestacional';
import CuidadosBebe from '../pages/CuidadosBebe/CuidadosBebe';
import TentandoEngravidar from '../pages/TentandoEngravidar/TentandoEngravidar';
import SonoDoBebe from '../pages/Sono/Sono';
import SaudeMental from '../pages/SaudeMental/SaudeMental';
import Enxoval from '../pages/Enxoval/Enxoval';

import Questionario from '../pages/Questionario/Questionario';

import PoliticaDePrivacidade from '../pages/PoliticaDePrivacidade/PoliticaDePrivacidade';
import TermosDeUso from '../pages/TermosDeUso/TermosDeUso';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          
          {/* PRINCIPAIS */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />

          {/* AUTENTICAÇÃO */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />

          {/* ROTA ADMINISTRADOR */}
          <Route
            path="/administrador"
            element={<Administrador />}
          />

         

          {/* ARTIGOS */}
          <Route
            path="/periodo-gestacional"
            element={<PeriodoGestacional />}
          />

          <Route
            path="/cuidados-bebe"
            element={<CuidadosBebe />}
          />

          <Route
            path="/tentando-engravidar"
            element={<TentandoEngravidar />}
          />

          <Route
           path="/sono"
           element={<SonoDoBebe />}
          />

          <Route
           path="/saude-mental"
           element={<SaudeMental />}
          />

          <Route
           path="/enxoval"
           element={<Enxoval />}
          />



          {/* QUESTIONÁRIO */}
          <Route
            path="/questionario"
            element={<Questionario />}
          />

          {/* POLÍTICAS */}
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaDePrivacidade />}
          />

          <Route
            path="/termos-de-uso"
            element={<TermosDeUso />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}