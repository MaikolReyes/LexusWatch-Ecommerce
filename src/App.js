import React from "react";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from './components/Product';
import Category from './components/Category';



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/category/:Id" element={<Product />} />
          <Route exact path="/item/:itemId" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  )


}


// Exportando el componente para que pueda ser usado por otros componentes
export default App;
