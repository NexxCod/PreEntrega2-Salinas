import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({cartCount, title}) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> 
          <div className="d-flex align-items-center">
            <Link className="navbar-brand me-2" to="/">{title}</Link>
            <div className="d-lg-none"> 
              <CartWidget />
            </div>
          </div>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/category/celular">Teléfonos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/tablet">Tablets 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/computer">Notebooks</Link>
              </li>
            </ul>
            <div className="d-none d-lg-flex">
              <CartWidget cartCount={cartCount} />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  

export default NavBar