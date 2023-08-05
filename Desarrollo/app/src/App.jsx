import './App.css'
import { useState } from 'react';

import Piso1 from './components/Piso1';
import Piso2 from './components/Piso2';
import Piso3 from './components/ComponentePrueba3';

const pisos = [
  { nombre: 'Piso 1', codigo: 'P1', componente: <Piso1 /> },
  { nombre: 'Piso 2', codigo: 'P2', componente: <Piso2 /> },
  { nombre: 'Piso 3', codigo: 'P3', componente: <Piso3 /> },
]

function App() {
  const [selectedOption, setSelectedOption] = useState('P1');

  const handleSelectChange = (event) => {
    const pisoSeleccionado = event.target.value;
    setSelectedOption(pisoSeleccionado);
  }

  const selectedComponent = pisos.find(piso => piso.codigo == selectedOption).componente;

  return (
    <div className='map'>
      <h2>Selecciona una opción:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        {pisos.map(piso => (
          <option key={piso.nombre} value={piso.codigo}>
            {piso.nombre}
          </option>
        ))}
      </select>
      {selectedComponent}
    </div>
  );
}

export default App;