import PropTypes from "prop-types";
import imagenes from './imagenes';
import './Producto.css';
import React, { useState } from "react";


const ClicDeCompras = () => {
    
    alert('Vas a comprar');
    }

function Producto(props){
    console.log('Ruta de la imagen:', imagenes[props.imagen]);
   
    let [Remeras, SetRemeras] = useState (0);
    let [PrecioTotal, SetPrecio] = useState(0);
    return(
        <section className="seccion">
        <h2> {props.nombre}</h2>
        <h2> Precio $:{props.precio}</h2>
        <p> Stock :{props.cantidad}</p>
        <img src={imagenes[props.imagen]} alt={props.nombre}/>
        <br />
        <button className = "button" onClick={() =>SetPrecio (PrecioTotal+11000) & SetRemeras (Remeras+1)}>Agregar al carrito</button>
        <p>Precio Total : ${PrecioTotal}</p>
        <p>Cantidad de Remeras: {(Remeras)}</p>
        <button className = "button" onClick={() =>SetPrecio (PrecioTotal=0) & SetRemeras (Remeras=0)}>Vaciar el carrito</button>
        <button className = "button" onClick = {ClicDeCompras} >Comprar</button>
        </section>
    )
   
}


Producto.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number,
    id: PropTypes.number,
    cantidad: PropTypes.number,
    PrecioTotal: PropTypes.number,
    Remeras: PropTypes.number,
    imagen: PropTypes.string,
}




export default Producto;