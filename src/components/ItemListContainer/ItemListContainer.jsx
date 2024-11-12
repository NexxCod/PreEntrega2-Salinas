import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory} from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=> {
        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        asyncFunctions(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h2 className="greeting-message">{greeting}</h2>
          <ItemList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;