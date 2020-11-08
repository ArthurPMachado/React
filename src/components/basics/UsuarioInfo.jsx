import React from 'react';
import If from '../helper/if';

function UsuarioInfo(props) {
  const { usuario } = props || {};

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{ usuario.nome }</strong>
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Visitante</strong>
      </If>
    </div>
  );
}

export default UsuarioInfo;
