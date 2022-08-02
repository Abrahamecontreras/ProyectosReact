import React from 'react';
import '../estilos/Boton.css'

function Boton({ texto, esBotonClick, fnManejarClick })  {
   return(
      <button className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={fnManejarClick}>
         {texto}
      </button>
   );
}

export default Boton;