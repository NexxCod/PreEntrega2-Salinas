import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

function CartWidget() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge bg-secondary ms-1">{totalItems}</span>
    </div>
  );
}

export default CartWidget;
