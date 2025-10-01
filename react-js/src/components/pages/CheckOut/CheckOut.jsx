import { useContext, useState } from "react";
import './CheckOut.css'
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom";

const CheckOut = () => {
    const { cart, getTotalPrice, resetCart } = useContext(CartContext)
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: "",
    })

    const [ordenId, setOrdenId] = useState(null)

    const capturarDatos = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const funcionDelFormulario = (e) => {
        e.preventDefault();

        let total = getTotalPrice();
        let orden = {
            buyer: userData,
            items: cart,
            total,
        }
        let ordenesCollection = collection(db, "ordenes")
        addDoc(ordenesCollection, orden)
            .then((res) => {
                setOrdenId(res.id)
                resetCart()
            })
        let productosCollection = collection(db, "productos")
        orden.items.forEach( elemento => {
            let refDoc = doc( productosCollection, elemento.id )
            updateDoc( refDoc, {stock: elemento.stock - elemento.quantity } )
        })
    }



    return (
        <div>
            <h2 className="formulario">Formulario de Compra</h2>
            {
                ordenId ? (
                    <div className="contenedor-ticket">
                        <h2 className="comentario-ticket">Gracias Por Tu Compra, Tu Ticket es :</h2>
                        <h2 className="ticket">{ordenId}</h2>
                        <button className="boton"> <Link to="/">Seguir Comprando</Link> </button>
                    </div>
                ) : (
                    <form className="form" onSubmit={funcionDelFormulario}>
                        <input
                            className="imput-form"
                            type="text"
                            placeholder="nombre"
                            name="nombre"
                            onChange={capturarDatos}
                        />
                        <input
                            className="imput-form"
                            type="text"
                            placeholder="email"
                            name="userEmail"
                            onChange={capturarDatos}
                        />
                        <input
                            className="imput-form"
                            type="text"
                            placeholder="telefono"
                            name="telefono"
                            onChange={capturarDatos}
                        />
                        <button className="boton" type="submit">Enviar</button>
                    </form>
                )}
        </div>
    );
}

export default CheckOut