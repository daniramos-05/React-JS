import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { productos } from "../../../products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productosState, setProductosState] = useState([]);
  const { nombre } = useParams(); 

  useEffect(() => {
    if (nombre) {

      const productosFiltrados = productos.filter(
        (el) => el.categoria === nombre
      );
      setProductosState(productosFiltrados);
    } else {
      
      setProductosState(productos);
    }
  }, [nombre]);

  return <ItemList productos={productosState} />;
};

export default ItemListContainer;