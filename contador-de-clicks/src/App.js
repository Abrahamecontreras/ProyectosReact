import './App.css';
//import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks ] = useState(0); 

  const fnManejarClick = () => {
    setNumClicks(numClicks + 1);
    
  };

  const fnReiniciarContador = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className='titulo-contenedor'>
        <h1 className='titulo'>Contador de Clicks (Hook useState)</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} 
          />
        <Boton 
          texto ='Click'
          esBotonClick={true}
          fnManejarClick={fnManejarClick} />
        <Boton 
          texto = 'Reiniciar'
          esBotonClick={false}
          fnManejarClick={fnReiniciarContador} />
      </div>
    </div>
  );
}

export default App;


//syan