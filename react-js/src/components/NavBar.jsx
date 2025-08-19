import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'

const NavBar = ({ chau, saludo, links, imagen }) => {

  return (
    <div className="nav">
      <h1>Mi Tiendita</h1>
      <a href="">{links[0]}</a>
      <a href="">{links[1]}</a>
      <a href="">{links[2]}</a>
      <CartWidget />
    </div>
  );
}

export default NavBar 