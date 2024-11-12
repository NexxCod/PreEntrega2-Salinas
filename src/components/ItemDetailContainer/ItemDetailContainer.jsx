import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../asyncMock';

function ItemDetailContainer() {
  const { itemId } = useParams(); // Obtiene el itemId desde los parámetros de la URL
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Muestra el indicador de carga
    getProductById(itemId).then((data) => {
      setProduct(data); // Guarda el producto obtenido
      setLoading(false); // Oculta el indicador de carga
    });
  }, [itemId]);

  return (
    <div className="container my-4">
      {loading ? <p>Cargando detalles del producto...</p> : <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
