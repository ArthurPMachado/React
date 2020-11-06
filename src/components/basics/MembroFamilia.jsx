import React from 'react';

function MembroFamilia(props) {
  const { nome, sobrenome } = props;

  return (
    <div>
      <p>{nome} <strong>{sobrenome}</strong></p>
    </div>
  );
}

export default MembroFamilia;
