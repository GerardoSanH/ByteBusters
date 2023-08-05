import './MainContent.css';
import Mapa from '../Mapa/Mapa';

function MainContent() {
  return (
    <main>
      <div className='main'>
        <img id="ninyo" className='lineas-adorno' src="../../../lineas-ninio.jpg" alt="" />
        <div className="map-wrapper">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Buscar..." />
            <button className="search-button">Buscar</button>
          </div>
          <Mapa />
        </div>

        <img id="lineas" src="../../../public/lineas2.jpg" alt="" />
      </div>
    </main>
  );
}

export default MainContent;
