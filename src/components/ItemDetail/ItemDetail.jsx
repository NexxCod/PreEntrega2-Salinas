import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ItemDetail({ product }) {
    const { cart, addItemToCart, removeItemFromCart } = useCart(); // Accede al carrito desde el contexto
    const navigate = useNavigate();
  
    if (!product) return null;
  
    // Verifica si el producto ya está en el carrito
    const isInCart = cart.some((item) => item.id === product.id);
  
    return (
      <div className="container my-5 item-detail-container">
        <div className="row">
          {/* Imagen del producto */}
          <div className="col-12 col-md-6 mb-4">
            <img src={product.image} className="img-fluid rounded item-image" alt={product.name} />
          </div>
          
          {/* Detalles del producto */}
          <div className="col-12 col-md-6">
            <h2 className="mb-3">{product.name}</h2>
            <p className="text-muted mb-3">Precio: ${product.price}</p>
            <p>{product.description}</p>
            <div className="d-flex flex-column flex-sm-row mt-4">
              <button
                onClick={() => addItemToCart(product)}
                className="btn btn-primary me-2 mb-2 mb-sm-0"
              >
                Agregar al carrito
              </button>
              {/* Solo muestra el botón de eliminar si el producto está en el carrito */}
              {isInCart && (
                <button
                  onClick={() => removeItemFromCart(product.id)}
                  className="btn btn-danger me-2 mb-2 mb-sm-0"
                >
                  Eliminar del carrito
                </button>
              )}
              <button
                onClick={() => navigate(-1)}
                className="btn btn-secondary"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ItemDetail;