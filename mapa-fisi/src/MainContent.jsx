import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main>
      <div className='main'>
        <div className="celda1">
        <img className='lineas-adorno' src="./lineas-ninio.jpg" alt="" />
        </div>
        <div className="celda2">
          <div class="search-container">
            <input type="text" class="search-input" placeholder="Buscar..." />
            <button class="search-button">Buscar</button>
          </div>
          <p>Mapa interactivo</p>
        </div>
        <div className="celda3">
          <img className='lineas-adorno' src="./lineas2.jpg" alt="" />
        </div>
        </div>
    </main>
  );
}

export default MainContent;
