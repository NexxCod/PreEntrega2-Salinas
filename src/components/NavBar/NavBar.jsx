import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar({ ecommerceName }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        {ecommerceName}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/calzado">
                Calzado
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/ropa">
                Ropa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/accesorios">
                Accesorios
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;