import React from 'react';
import '../styles/cuadro.css'

function CuadroB({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default CuadroB;