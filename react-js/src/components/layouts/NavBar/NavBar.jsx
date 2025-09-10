import './NavBar.css'
import CartWidget from '../../common/CartWidget/CartWidget';
import { Link } from "react-router-dom"

const NavBar = ( {chau, saludo, links, imagen} ) => {

  return (
    <div className="nav">
      <Link className="mi-tiendita" to="/">
        <h1>Mi Tiendita</h1>
      </Link>
      <ul className="contenedor-articulos">
        <Link to="/categoria/arriba" className="articulos">Arriba</Link>
        <Link to="/categoria/abajo" className="articulos">Abajo</Link>
        <Link to="/categoria/calzado" className="articulos">Calzado</Link>
        <Link to="/categoria/accesorios" className="articulos">Accesorios</Link>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar 