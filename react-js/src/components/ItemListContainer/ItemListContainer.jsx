import React from 'react'
import Button from '../Button/Button'
import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {

    const saludar = () => console.log("Hola mundo")
    const despedir = () => console.log("Hasta la proxima");

    return (
        <div className='contenedor-boton'>
            <Button text="Saludar" fn={saludar} color="negro" />
            <p>{saludo}</p>
            <Button text="Despedir" fn={despedir} color="gris" />
        </div>
    );
}

export default ItemListContainer