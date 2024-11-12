import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
