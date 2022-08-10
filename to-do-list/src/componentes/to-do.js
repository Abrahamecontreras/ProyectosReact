import React from 'react';
import '../estilos/To-do.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function ToDo( {id, texto, completado, completarTarea, eliminarTarea} ) {
  return(
    <div className={completado ? 'to-do-contenedor completado' : 'to-do-contenedor'}>
      <div 
        className='to-do-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='to-do-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='to-do-icono'/>
      </div>
    </div>
  )
}

export default ToDo;