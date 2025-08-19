import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const links = ["Productos", "Medidas", "Contacto"]

  return (
    <>
      <NavBar links={links} />
      <ItemListContainer saludo={" ¡Hola👋! "} />
    </>
  );
}

export default App;
