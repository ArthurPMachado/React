import React from 'react';

function DiretaFilho(props) {
  const { nome, idade, adulto } = props;

  return (
    <div>
      <span>{nome} </span>
      <span> {idade} </span>
      <span>{adulto ? 'Verdadeiro' : 'Falso'}!</span>
    </div>
  );
}

export default DiretaFilho;
