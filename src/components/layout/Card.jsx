import React from 'react';

import './card.css';

function Card(props) {
  const { titulo } = props;

  return (
    <div className="container">
      <div className="title">{titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
