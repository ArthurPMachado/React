import React from 'react';
import MembroFamilia from './MembroFamilia';

function Familia(props) {
  const { sobrenome } = props;

  return (
    <div>
      <MembroFamilia nome="Pedro" sobrenome={sobrenome} />
      <MembroFamilia nome="Ana" sobrenome={sobrenome} />
      <MembroFamilia nome="Gustavo" sobrenome={sobrenome} />
    </div>
  );
}

export default Familia;
