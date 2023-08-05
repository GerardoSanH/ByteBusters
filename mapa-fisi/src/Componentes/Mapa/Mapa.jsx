import './Mapa.css'
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Piso1 from '../Pisos/Piso1';
import Piso2 from '../Pisos/Piso2';
import Piso3 from '../Pisos/Piso3';

const pisos = [
   { nombre: 'Piso 1', codigo: 'P1', componente: <Piso1 /> },
   { nombre: 'Piso 2', codigo: 'P2', componente: <Piso2 /> },
   { nombre: 'Piso 3', codigo: 'P3', componente: <Piso3 /> },
]

function Mapa() {
   const [opcionSeleccionada, setOpcionSeleccionada] = useState('P1');

   const handleSelectChange = (event) => {
      const pisoSeleccionado = event.target.value;
      setOpcionSeleccionada(pisoSeleccionado);
   }

   const componenteSeleccionado = pisos.find(piso => piso.codigo == opcionSeleccionada).componente;

   return (
      <section className='map-section'>
         <div className='selector'>
            <span>Selecciona un piso:</span>
            <select value={opcionSeleccionada} onChange={handleSelectChange}>
               {pisos.map(piso => (
                  <option key={piso.nombre} value={piso.codigo}>
                     {piso.nombre}
                  </option>
               ))}
            </select>
         </div>
         <TransformWrapper >
            <TransformComponent >
               { componenteSeleccionado }
            </TransformComponent>
         </TransformWrapper>
      </section>
   );
}

export default Mapa;