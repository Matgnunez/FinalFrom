import Producto from './Producto';
import productos from './datosProductos';



function ListaProductos(){

    return(
<div>
            {productos.map((producto, index) => (
            <Producto 
                key={index}
                nombre={producto.nombre}
                precio={producto.precio}
                cantidad={producto.cantidad}
                imagen={producto.imagen}
                Remeras={producto.Remeras}
                PrecioTotal={producto.PrecioTotal}

            />
        

       
       
       ))}
     
      </div>
    )
}


export default ListaProductos;