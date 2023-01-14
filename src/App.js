import React from "react";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout 
import Navbar from "./layout/Navbar";
import Footer from './layout/Footer'
// Components
import ProductList from "./components/ProductList";
import Product from './components/Product';
import Category from './components/Category';
import Cart  from "./components/Cart";
import CartProvider from './context/CartContext';


const App = () => {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer />

    </>
  )
}

// Exportando el componente para que pueda ser usado por otros componentes
export default App;
