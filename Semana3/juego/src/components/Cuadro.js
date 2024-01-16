import React from "react";
import '../styles/cuadro.css';

function Cuadro({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default Cuadro;