import Testimonio from "./componentes/Testimonios.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros estudiantes</h1>
        <Testimonio
          numero="3"
          nombre="Juan Pablo Villena"
          cargo="Diseñador Grafico"
          testimonio="Ingresé a Atenea para formalizar y completar mis conocimientos empíricos en diseño editorial. Es decir solamente pasar un curso corto, sin embargo, la metodología de enseñanza y la compatibilidad con mis horarios laborales me impulsaron a continuar los estudios." />
        <Testimonio
          numero="1"
          nombre="Juan Pablo Villena"
          cargo="Diseñador Grafico"
          testimonio="Ingresé a Atenea para formalizar y completar mis conocimientos empíricos en diseño editorial. Es decir solamente pasar un curso corto, sin embargo, la metodología de enseñanza y la compatibilidad con mis horarios laborales me impulsaron a continuar los estudios." />
        <Testimonio
          numero="2"
          nombre="Juliana Zanahoria"
          cargo="Contaduria"
          testimonio="la vida es una lenteja, o la tomas o la dejas xd" />
      </div>

    </div>
  );
}

export default App;
