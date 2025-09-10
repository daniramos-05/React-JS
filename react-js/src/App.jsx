import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/layouts/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import CartWidget from './components/common/CartWidget/CartWidget';

const links = ["Productos", "Medidas", "Contacto"]

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar links={links} />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={" ¡Hola👋! "} />} />
          <Route path="/categoria/:nombre" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
