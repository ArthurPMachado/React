/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';

import './index.css';

ReactDOM.render(
  <div>
    <Primeiro />
    <Propriedades
      titulo="Situação do Aluno"
      aluno="Arthur Machado"
      nota={9.3}
    />
  </div>,
  document.getElementById('root'),
);
