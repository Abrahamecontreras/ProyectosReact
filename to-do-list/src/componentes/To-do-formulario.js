import React, { useState } from 'react';
import '../estilos/To-do-formulario.css'
import { v4 as uuidv4 } from 'uuid';

function ToDoFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
    console.log(e.target.value)//Extraer valor de campo de txto
  }

  const manejarEnvio = e => {
    e.preventDefault();
    console.log('Enviando formulario...')

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    }

    props.onSubmit(tareaNueva);
  }

  return(
    <form 
    className='to-do-formulario'
    onSubmit={manejarEnvio}>
      <input
        className='to-do-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='to-do-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default ToDoFormulario;