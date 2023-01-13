import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import CadastroGrupo from './components/grupos/CadastroGrupo';
import NavBar from "./components/NavBar";
import CadastroProjeto from './components/projetos/CadastrarProjeto';
import DeleteProject from './components/projetos/DeletarProjeto';
import CadastroTurma from './components/turmas/CadastroTurma';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Projetos from './pages/Projetos';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/cadastrar" element={<Cadastro />} />

          <Route path="/deletarProjeto/:id" element={<DeleteProject />} />

          {/*<Route path="/formularioPostagem/:id" element={<CadastroPost />} />


          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />*/}

        </Routes>
      </Router>
  );
}

export default App;