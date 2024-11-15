import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
