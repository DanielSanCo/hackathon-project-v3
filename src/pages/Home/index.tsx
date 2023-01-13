import React, { useEffect, useState } from 'react';
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Projeto from '../../models/Projeto';
import { api } from '../../services/service';
import Turma from '../../models/Turma';
//import Projetos from './components/projetos';

function Home() {



  return (
    <div className="container">

      <div className="home">
        <div className='siteTitulo'>
          <div>

            <h1>Generation Projetos</h1>
            <h3>Projetos dos alunos da Generation Brasil</h3>
            <div className='buttonsArea'>
              <a href='/projetos'><button>Projetos</button></a>
              <a href='/cadastrar'><button>Novo Projeto</button></a>
            </div>
          </div>
        </div>
        <div className='rightSide'></div>

        <div className='background'>
          <img src="https://cdn.wallpapersafari.com/4/24/yomiXr.jpg" className="backHome" alt="" />
        </div>
      </div>


      <div className='footer'>
        olá mundo
      </div>

    </div>
  );
}

export default Home;
