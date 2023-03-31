import React from "react";

import { Navbar, ProductList,ProductDetail,Cart } from "./components";
import {  useSelector } from "react-redux";

import {Routes,Route} from 'react-router-dom'

const App = () => {
 
  const products = useSelector((state) =>
    state.products.items.filter(
      (product) =>
        state.products.selectedCategory === "All" ||
        product.category === state.products.selectedCategory
    )
  );
  

  return (
    <div className="w-full h-screen">
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<ProductList products={products} />}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
