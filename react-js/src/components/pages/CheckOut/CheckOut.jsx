import { useState } from "react";

const CheckOut = () => {
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: "",
    })

    const capturarDatos = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const funcionDelFormulario = (e) => {
        e.preventDefault();

        console.log("se envian a la api estos datos", userData)
    }

    return (
        <div>
            <h2>Aca el Formulario de Compra</h2>
            <form onSubmit={funcionDelFormulario}>
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    onChange={capturarDatos}
                />
                <input
                    type="text"
                    placeholder="email"
                    name="userEmail"
                    onChange={capturarDatos}
                />
                <input
                    type="text"
                    placeholder="telefono"
                    name="telefono"
                    onChange={capturarDatos}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default CheckOut