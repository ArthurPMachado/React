import React from 'react';

import './card.css';

function Card(props) {
  const { titulo, children, cor } = props;

  const cardStyle = {
    backgroundColor: cor || '#F00',
    borderColor: cor || '#F00',
  };

  return (
    <div className="card-container" style={cardStyle}>
      <div className="title">{titulo}</div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Card;
