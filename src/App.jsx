import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar cartCount={5} title="Mi Tienda" />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer greetings={"Tienda Online"} />}
        />
        <Route
          exact
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/detail/:productId"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
