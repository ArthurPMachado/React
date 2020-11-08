import React from 'react';

import ParOuImpar from './components/basics/ParOuImpar';
import TabelaProdutos from './components/basics/TabelaProdutos';
import ListaAlunos from './components/basics/ListaAlunos';
import MembroFamilia from './components/basics/MembroFamilia';
import Familia from './components/basics/Familia';
import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';
import Fragmento from './components/basics/Fragmento';
import NumeroAleatorio from './components/basics/NumeroAleatorio';
import Card from './components/layout/Card';

import './app.css';

function App() {
  return (
    <div className="container">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="#08 - Renderização Condicional" cor="#982395">
          <ParOuImpar numero={21} />
        </Card>

        <Card titulo="#07 - Mais Repetição" cor="#3A9AD9">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição" cor="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componente com Filhos" cor="#00C8F8">
          <Familia sobrenome="Ferreira">
            <MembroFamilia nome="Pedro" />
            <MembroFamilia nome="Ana" />
            <MembroFamilia nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Numero Aleatorio" cor="#FA6900">
          <NumeroAleatorio
            min={10}
            max={100}
          />
        </Card>

        <Card titulo="#03 - Fragmento" cor="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Propriedades" cor="#E8B71A">
          <Propriedades
            titulo="Situação do Aluno"
            aluno="Arthur Machado"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" cor="#588C73">
          <Primeiro />
        </Card>
      </div>

    </div>
  );
}

export default App;
