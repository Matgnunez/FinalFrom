import Disco from './Disco';
import discos from './datosDiscos';



function ListaDiscos(){

    return(
<div>
            {discos.map((disco, index) => (
            <Disco 
                key={index}
                nombre={disco.nombre}
                lanzamiento={disco.lanzamiento}
                duracion={disco.duracion}
                canciones={disco.canciones}
                creditos={disco.creditos}
                formato={disco.formato}
                imagen={disco.imagen}

            />

       
       
       ))}
      </div>
    )
}


export default ListaDiscos;