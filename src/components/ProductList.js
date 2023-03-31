import React from "react";
import Product from "./Product";
import { setSelectedCategory } from "../redux/reducers";
import { useDispatch } from "react-redux";
import Menu from "./Menu";

const ProductList = ({ products }) => {
     const dispatch = useDispatch();
     const handleMenuClick = (category) => {
       dispatch(setSelectedCategory(category));
     };
  

  
  return (
    <div>
      <Menu onMenuClick={handleMenuClick} />
      <div className="flex flex-wrap px-12 bg-base-300">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-8">
            <Product products={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
