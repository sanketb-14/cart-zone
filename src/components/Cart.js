import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../redux/reducers";
import { ImCross } from "react-icons/im";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import err2 from "../assets/images/err2.svg";
import {Link} from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.products.cartItem);
  const total = useSelector((state) => state.products.priceTotal);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    
    dispatch(removeCartItem(item));
  };
  if (cart.length === 0) {
    return (
      <div className="w-full flex flex-col mt-4 justify-center items-center h-screen pb-40">
        <h1 className="text-4xl font-bold text-accent-focus my-8">
          Cart is Empty...
        </h1>
        <img className="w-full h-80" src={err2} alt="Not Found" />
      </div>
    );
  }

  return (
    <div className="w-full flex  flex-col justify-center items-center bg-base-100 h-fit">
      <div className="flex w-full  bg-base-200 mt-2">
        <h1 className="text-4xl font-bold text-start w-full p-4 px-20 text-primary">
          Shopping Cart
          <Link to="/" className="btn btn-sm text mx-4 bg-primary border-none text-primary-content hover:bg-primary-focus">
            Home
          </Link>
        </h1>

        <button className="btn btn-primary text-white w-1/6 mx-8 flex justify-center">
          <span className="mx-4 text-2xl ">
            {" "}
            <MdOutlineShoppingCartCheckout />
          </span>{" "}
          CheckOut
        </button>
      </div>

      <div className="card w-3/5 card-side flex justify-evenly mt-2">
        <h2 className="card-title px-4 ">Product</h2>
        <h2 className="card-title px-4 ">Quantity</h2>
        <h2 className="card-title px-4">Price</h2>
      </div>
      {cart.map(({ image, title, price, category, id }) => (
        <div
          className="card w-3/5 card-side h-40 items-center  flex p-2 px-24 justify-center rounded-xl shadow-xl m-2 border-x-4 mt-2  border-accent"
          key={id}
        >
          <figure className="">
            <img src={image} alt={title} className="w-28 h-24" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-sm text-accent">{category}</p>
          </div>
          <div className=" flex flex-col w-1/2 ">
            <label htmlFor="quantity" className="card-title bg-base-100">
              <input
                name="quantity"
                type="number"
                id="quantity"
                min="1"
                max="10"
                defaultValue="1"
                className="border-2 p-2 bg-base-200 text-center ml-20"
              />
            </label>
          </div>
          <div className="btn btn-primary w-1/4 font-bold text-xl text-primary-content">
            $ {price}
          </div>
          <button
            className="btn btn-circle bg-base-100 border-none text-red-400 hover:btn-ghost focus:btn-ghost hover:text-red-800 font-bold text-xl"
            onClick={() => handleRemoveFromCart(id)}
          >
            <ImCross />
          </button>
        </div>
      ))}
      <div className="w-full bg-base-200 p-2 flex justify-evenly ">
        <h1 className="text-3xl w-1/5 text-center p-4 bg-accent-content text-primary font-bold rounded-xl shadow-xl ">
          Total
        </h1>
        <h1 className="text-3xl text-primary font-bold w-1/5 rounded-xl shadow-xl text-center p-4 bg-accent-content">
          $ {total}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
