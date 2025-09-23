import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/layouts/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import CartWidget from './components/common/CartWidget/CartWidget';
import { CartContextProvider } from "./context/CartContext";
import Checkout from './components/pages/CheckOut/CheckOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={" ¡Hola👋! "} />} />
            <Route path="/categoria/:nombre" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartWidget />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
