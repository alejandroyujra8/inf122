import React from "react";
import "../estilos/Testimonios.css"

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen1" src={require(`../imagenes/imagen${props.numero}.png`)} alt="testimonioJuan" />
            <div className="contenedor-texto">
                <p className="nombre-testimonio">{props.nombre}</p>
                <p className="cargo-testimonio">{props.cargo}</p>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio;