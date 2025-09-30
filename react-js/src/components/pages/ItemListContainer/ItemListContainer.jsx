import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
// import { productos } from "../../../products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { BarLoader } from "react-spinners"
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const misProductos = nombre ? query(collection(db, "productos"), where("idNombre", "==", nombre)) : collection(db, "productos")
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [nombre])

  //useEffect(() => {
  //    if (nombre) {
  //
  //      const productosFiltrados = productos.filter(
  //        (el) => el.categoria === nombre
  //      );
  //      setProductosState(productosFiltrados);
  //    } else {
  //      
  //      setProductosState(productos);
  //    }
  //  }, [nombre]);

  //  const agregarProductos = () => {
  //
  //    let productosCollection = collection( db, "productos" )
  //    productos.forEach( elemento => {
  //      addDoc( productosCollection, elemento )
  //    })
  //  }

  return (
    <>
      {/*<button onClick={agregarProductos}>Agregar Productos</button>*/}
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;