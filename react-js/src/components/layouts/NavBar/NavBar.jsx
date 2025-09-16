import './NavBar.css'
import CartWidget from '../../common/CartWidget/CartWidget';
import { Link } from "react-router-dom"
import { useState } from 'react';

const NavBar = ({ chau, saludo, links, imagen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <Link className="mi-tiendita" to="/">
        <h1>Mi Tiendita</h1>
      </Link>
      <div className="icono" onClick={() => setIsOpen(!isOpen)}>☰</div>
      <ul className={`contenedor-articulos ${isOpen ? "open" : ""}`}>
        <li><Link to="/categoria/remera" className="articulos">Remeras</Link></li>
        <li><Link to="/categoria/campera" className="articulos">Camperas</Link></li>
        <li><Link to="/categoria/pantalon" className="articulos">Pantalones</Link></li>
        <li><Link to="/categoria/calzado" className="articulos">Calzado</Link></li>
        <li><Link to="/categoria/bermuda" className="articulos">Bermudas</Link></li>
        <li><Link to="/categoria/accesorios" className="articulos">Accesorios</Link></li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar 