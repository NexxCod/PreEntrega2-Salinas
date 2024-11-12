import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProductsByCategory } from '../../asyncMock';

function ItemListContainer() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      getProductsByCategory(categoryId).then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }, [categoryId]);
  
    return (
      <div className="container my-4">
        {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
    );
  }

export default ItemListContainer;
