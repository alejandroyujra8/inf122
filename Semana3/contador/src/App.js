import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0)
  const click = () => {
    setNumClicks(nroClicks + 1)
    console.log("+1");
  }
  const clickMenos1 = () => {
    setNumClicks(nroClicks - 1)
    console.log("-1");
  }
  const clickMas3 = () => {
    setNumClicks(nroClicks + 3)
    console.log("+3");
  }

  const clickMenos3 = () => {
    setNumClicks(nroClicks - 3)
    console.log("-3");
  }

  const reiniciar = () => {
    setNumClicks(0)
    console.log("Reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contenedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickMenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickMas3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickMenos1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={click} />
        </div>
        <div className='contenedor-reiniciar'>
            <Boton texto="Reiniciar" esBotonClick={false}
              funcionClick={reiniciar} />
          </div>
      </div>
    </div>
  );
}

export default App;