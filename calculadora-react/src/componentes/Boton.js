import React from 'react';
import '../estilos/Boton.css'

function Boton(props) {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=') //if todo true, return true*
  };

  return(
    <div                                                                            //delete starting and ending blank spaces
      className={`boton-contenedor  ${esOperador(props.children) ? 'operador' : ''}`.trim()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
}//onClick requiere una funcion anonima para funcionar | () => |

export default Boton;