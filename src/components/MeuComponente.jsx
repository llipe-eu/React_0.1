import React from 'react';
import minhaImagem from '../assets/gato.jpeg';

function MeuComponente() {
  return (
    <div className="componente"> 
      <h2>Gato</h2>
      <img src={minhaImagem}  
        alt="Foto de um gato" />
      <p>So um gato</p>
    </div>
  );
}

export default MeuComponente;
