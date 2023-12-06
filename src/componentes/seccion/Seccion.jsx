import './Seccion.css';
import divididos from '../../assets/img/banner.jpg';



function Seccion(){
    return(
        <section className="seccion">
        <h2> DIVIDIDOS - La Aplanadora del Rock </h2>
        <p> Banda de rock argentino, fundada en el año 1988 por Ricardo Mollo (Voz y Guitarra), Diego Arnedo (Bajo), ex integrantes del mitico grupo de Rock SUMO. Actualmente el talentoso músico, Catriel Ciavarella (Batería) es integrante estable de la banda </p>
        <img src= {divididos} alt='Divididos'/>
         </section>
        

    )

}

export default Seccion;