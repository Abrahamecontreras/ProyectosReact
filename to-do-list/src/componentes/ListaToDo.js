import React, { useState } from "react";
import ToDoFormulario from "./To-do-formulario";
import '../estilos/To-do-lista.css'
import ToDo from "./to-do";

function ListaToDo()  {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completado = !tarea.completado;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }


  return(
    <>
      <ToDoFormulario onSubmit={agregarTarea}/>
      <div className='to-do-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <ToDo 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completado={tarea.completado}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaToDo;