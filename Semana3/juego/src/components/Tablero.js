import React, { useState } from 'react';
import '../styles/tablero.css';
import Cuadro from './Cuadro';

/*function Tablero() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState(0);

    const click = (i) => {
        console.log(i);
        console.log(jugador);
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        console.log(cuadrosTemp);
        setJugador(jugador === "X" ? "0" : "X");

    };

    return (
        <div className="juego">
            <h1>Siguiente Jugador: {jugador}</h1>

            <div className="tablero">
                <Cuadro valor={cuadros[0]} funcion={() => click(0)} />
                <Cuadro valor={cuadros[1]} funcion={() => click(1)} />
                <Cuadro valor={cuadros[2]} funcion={() => click(2)} />
                <Cuadro valor={cuadros[3]} funcion={() => click(3)} />
                <Cuadro valor={cuadros[4]} funcion={() => click(4)} />
                <Cuadro valor={cuadros[5]} funcion={() => click(5)} />
                <Cuadro valor={cuadros[6]} funcion={() => click(6)} />
                <Cuadro valor={cuadros[7]} funcion={() => click(7)} />
                <Cuadro valor={cuadros[8]} funcion={() => click(8)} />
            </div>
        </div>
    );
}*/
function tablero({ cuadros, onClick }) {
    function renderizarCuadro(i) {
        return (
            <Cuadro
                valor={cuadros[i]}
                funcion={() => onClick()}
            />
        );
    }
    <div className='tablero'>
        {renderizarCuadro(0)}
        {renderizarCuadro(1)}
        {renderizarCuadro(2)}
        {renderizarCuadro(3)}
        {renderizarCuadro(4)}
        {renderizarCuadro(5)}
        {renderizarCuadro(6)}
        {renderizarCuadro(7)}
        {renderizarCuadro(8)}
    </div>

}

export default Tablero;
