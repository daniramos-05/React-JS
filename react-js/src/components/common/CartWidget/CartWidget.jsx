import './CartWidget.css'
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link className='Link' to="/cart">
      🛒
      <span>0</span>
    </Link>
  )
}

export default CartWidget