import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebaseConfig"
import "./ItemDetail.css"
import ItemCount from "../../common/ItemCount/ItemCount"
import { BeatLoader } from "react-spinners"

const ItemDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      const docRef = doc(db, "productos", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() })
      }
    }

    fetchProducto()
  }, [id])

  if (!producto) return <BeatLoader
          color="#9cb68a"
          margin={8}
          size={15}
        />

  return (
    <div className="contenedor-producto-mas-detalles">
      <div className="contenedor-del-contenedor-prod-mas-detalles">
        <h2 className="nombre-mas-detalles">{producto.nombre}</h2>
        <img className="img-mas-detalles" src={producto.img} alt={producto.nombre} />
        <p className="description-mas-detalles">{producto.description}</p>
        <ItemCount producto={producto} />
      </div>
    </div>
  )
}

export default ItemDetail
