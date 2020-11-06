import React from 'react';
import alunos from '../../data/alunos';

function ListaAlunos(props) {
  const renderLis = alunos.map((aluno) => (
    <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>
  ));

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {renderLis}
      </ul>
    </div>
  );
}

export default ListaAlunos;
