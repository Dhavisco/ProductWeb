import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
