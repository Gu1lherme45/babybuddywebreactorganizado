import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import Cadastro from '../pages/Cadastro/Cadastro';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
           <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}