import Item from "../../common/Item/Item";
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <div className="contenedor">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;