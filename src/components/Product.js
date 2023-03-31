import React, { useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { setAddToCart, fetchProducts } from "../redux/reducers";

const Product = (props) => {
  const { id, title, image, price, rating, category } = props.products;

  

  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.products.items);
  let pr;

  const handleAddToCart = (e) => {
    e.preventDefault();
    pr = e.target.value - 1;
    console.log(singleProduct[pr]);

    dispatch(setAddToCart(singleProduct[pr]));
  };
  useEffect(() => {
    dispatch(fetchProducts(pr));
  }, [dispatch, pr]);

  return (
    <Link
      to={`/product/${id}`}
      className="card h-full  lg:card-side bg-base-100 shadow-xl"
    >
      <figure className="w-full  ">
        <img src={image} alt={title} className="rounded-xl " />
      </figure>
      <div className="card-body flex flex-col justify-center ">
        <h2 className="card-title text-base-content">{title}</h2>
        <h4 className="text-accent">{category}</h4>
        <div className="flex flex-col items-start mb-4">
          <div className="text-primary-focus font-bold text-xl bg-accent-content w-full p-2 text-center rounded-xl shadow-xl m-2">
            ${price}
          </div>
          <div className="ml-2 flex  font-semibold text-accent truncate ">
            {" "}
            Rating :-
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-${
                  i < Math.ceil(rating.rate)
                    ? "orange-500 my-1"
                    : "accent-content my-1"
                } `}
              />
            ))}
          </div>
        </div>
        <button
          value={id}
          onClick={handleAddToCart}
          className=" bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl inline-flex items-center truncate  justify-center"
        >
          <FaShoppingCart className="mr-2 " />
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Product;
