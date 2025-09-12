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
        <Link to="/categoria/remera" className="articulos">Remeras</Link>
        <Link to="/categoria/campera" className="articulos">Camperas</Link>
        <Link to="/categoria/pantalon" className="articulos">Pantalones</Link>
        <Link to="/categoria/calzado" className="articulos">Calzado</Link>
        <Link to="/categoria/bermuda" className="articulos">Bermudas</Link>
        <Link to="/categoria/accesorios" className="articulos">Accesorios</Link>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar 