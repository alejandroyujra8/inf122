import React from "react";
import '../stylesheet/Evento.css'

function Evento() {
    return (
        <div className="card-container">
            <img src="https://pylapaz.org/media/images/pypizza03.2e16d0ba.fill-256x256.format-webp-lossless.webp" className="card-image" alt="Gato" />
            <div className="text-container">
                <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="card-description">¡Hola Pythonista!
                Participa en este Evento Presencial de la comunidad Python La Paz
                ¿Cuánto conoces de Python? Aprende a trabajar en equipo resolviendo increíbles acertijo ¡Anímate a ser parte de esta actividad!</p>
            </div>
        </div>
    );
}

export default Evento;
