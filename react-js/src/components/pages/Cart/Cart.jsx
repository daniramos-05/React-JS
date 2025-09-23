import './Cart.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className='contenedor-carrito'>
      <h2>Carrito </h2>
      {
        cart.map((elemento) => {
          return (
            <div className='contenedor-productos-carrito' key={elemento.id}>
              <h3>{elemento.nombre}</h3>
              <h3>cantidad: {elemento.quantity}</h3>
              <h3>precio: {elemento.precio}</h3>
            </div>
          )
        })
      }
      <button className='boton'><Link to="/checkout">Finalizar Compra</Link></button>
    </div>
  )
}
