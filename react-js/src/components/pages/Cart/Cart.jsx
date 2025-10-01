import './Cart.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext)
  let totalAmount = getTotalPrice()
  return (
    <div className='contenedor-carrito'>
      <h2 className='carrito'>Carrito </h2>
      {
        cart.map((elemento, index) => {
          return (
            <div className='contenedor-productos-carrito' key={elemento.id ? elemento.id : index}>
              <h3>{elemento.nombre}</h3>
              <img className='img-carrito' src={elemento.img} alt="" />
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>Precio: {elemento.precio}</h3>
              <button className='boton' onClick={() => removeProduct(elemento.id)}>Eliminar</button>
            </div>
          )
        })}
      {cart.length === 0 ? (
        <h2>El Carrito Esta Vacio</h2>
      ) : (
        <div>
          <h3>El total del carrito es: ${totalAmount}</h3>
          <button className='boton' onClick={resetCart}>Limpiar todo el carrito</button>
          <button className='boton'><Link to="/checkout">Finalizar Compra</Link></button>
        </div>
      )
      }
    </div>
  )
}

export default Cart 