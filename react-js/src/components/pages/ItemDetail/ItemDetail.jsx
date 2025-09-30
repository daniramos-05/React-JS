import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebaseConfig"
import "./ItemDetail.css"
import ItemCount from "../../common/ItemCount/ItemCount"

const ItemDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      const docRef = doc(db, "productos", id) 
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() })
      } else {
        console.log("Producto no encontrado")
      }
    }

    fetchProducto()
  }, [id])

  if (!producto) return <p>Cargando...</p>

  return (
    <div className="contenedor-producto-mas-detalles">
      <h2 className="nombre-mas-detalles">{producto.nombre}</h2>
      <img className="img-mas-detalles" src={producto.img} alt={producto.nombre} />
      <p className="description-mas-detalles">{producto.description}</p>
      <ItemCount producto={producto} />
    </div>
  )
}

export default ItemDetail
