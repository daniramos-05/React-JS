import React, { useState } from "react";
import Button from "../../common/Button/Button";
import "./ItemCount.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const ItemCount = ({ producto }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (count < 10) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const onAdd = () => {
    let productToCart = { ...producto, quantity: count };
    addToCart (productToCart)
  };

  return (
    <>
      <div className="contenedor-itemcount">
        <Button text="-" fn={restar} color="negro" />
        <span>{count}</span>
        <Button text="+" fn={sumar} color="negro" />
        <button className="boton" onClick={onAdd}>Agregar Al Carrito</button>
      </div>
    </>
  );
};

export default ItemCount