import React, { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [productos, setProductos] = useState(1);
  const [ordenados, setOrdenados] = useState(true);

  const sumar = () => {
    if (count < 10) setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="contenedor-itemcount">
        <Button text="-" fn={restar} color="negro" />
        <span>{count}</span>
        <Button text="+" fn={sumar} color="negro" />
      </div>
    </>
  );
};

export default ItemCount;