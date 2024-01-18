import React from 'react';
import '../styles/cuadro.css';

function Cuadro({ valor }) {
    return (
        <button className="cuadro">
            {valor}
        </button>
    );
}

export default Cuadro;