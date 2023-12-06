import PropTypes from "prop-types";
import imagenes from './imagenes';



function Disco(props){
    console.log('Ruta de la imagen:', imagenes[props.imagen]);

    return(
        <section className="seccion">
        <h2> {props.nombre}</h2>
        <p> {props.lanzamiento}</p>
        <p> {props.duracion}</p>
        <p> {props.canciones}</p>
        <p> {props.creditos}</p>
        <p> {props.formato}</p>
        <img src={imagenes[props.imagen]} alt={props.nombre}/>


        </section>
    )
}

Disco.propTypes = {
    nombre: PropTypes.string.isRequired,
    lanzamiento: PropTypes.string,
    duracion: PropTypes.string,
    canciones: PropTypes.string,
    creditos: PropTypes.string,
    formato: PropTypes.string,
    imagen: PropTypes.string,

};


export default Disco;