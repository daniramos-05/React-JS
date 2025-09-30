import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../products"
import "./ItemDetail.css"
import ItemCount from "../../common/ItemCount/ItemCount"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../firebaseConfig"


const ItemDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})

  useEffect(() => {
    const misProductos = id ? query (collection(db, "productos"), where("idId", "==", id )) : collection(db, "productos")
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducto(nuevosProductos)
    })
    .catch(error => console.log(error))
  }, [id])

//  useEffect(() => {
//    let productSelected = productos.find((el) => el.id === +id)
//    setProducto(productSelected)
//  }, [id])

  return (
    <div className="contenedor-producto-mas-detalles">
      <h2 className="nombre-mas-detalles">{producto?.nombre}</h2>
      <img className="img-mas-detalles" src={producto?.img} alt="" />
      <p className="description-mas-detalles">{producto?.description}</p>
      <ItemCount producto={producto} />
    </div>
  );
}

export default ItemDetail