import { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const addToCart = (producto) => {
        console.log(producto)
        setCart( [...cart, producto] )
    } 

    let data = { cart , addToCart }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}