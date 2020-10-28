import React from 'react';

function Propriedades({ nota, titulo, aluno }) {
  const status = nota >= 7 ? 'Aprovado' : 'Recuperação';

  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong>{aluno} </strong>
        tem nota
        <strong> {nota} </strong>
        e está
        <strong> {status}</strong>
      </p>
    </div>
  );
}

export default Propriedades;
