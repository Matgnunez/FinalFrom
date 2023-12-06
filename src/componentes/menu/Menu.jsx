import { Link } from "react-router-dom";


// npm i react-router-dom


const Menu = () => {

    return (
        <nav >
            <span>
            <Link to="/"> Fechas </Link>,
            <Link to="/seccion"> Data </Link>,
            <Link to="/discos"> Discos </Link>,
            <Link to="/productos"> Productos </Link>,
            </span>
        </nav>
    )
}




export default Menu;