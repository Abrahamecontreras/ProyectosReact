import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import ListaToDo from './componentes/ListaToDo';


function App() {
  return (
    <div className="to-do-list">
      <div className='freecodecamp-logo-contenedor'>
      <img 
        alt='imagen de FreeCodeCampLogo'
        src={freeCodeCampLogo} 
        className='freecodecamp-logo'/>
      </div>
      <div className='to-do-list-principal'>
        <h1>Mis Tareas</h1>
        <ListaToDo />
      </div>
    </div>
  );
}

export default App;
