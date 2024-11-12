import './CartWidget.css';

const CartWidget = ({cartCount}) => {
  return (
    <div className="position-relative">
      <i className="fas fa-shopping-cart text-white"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartCount}
      </span>
    </div>
  );
};


  export default CartWidget;