import logo from'./logo.svg';
import './App.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';

function App() {
  return (
    <div className="App">
      <Evento/>
    <EventoB title="Py Pizza 03 - PyPuzzle"
    image="evento1"
    dateLiteral="sdasdsada0"
    plceLiteral="dasdadadasda"
    description="dgysugdysaugdysuagduyisagdua"
    />
    </div>
  );
}

export default App;
