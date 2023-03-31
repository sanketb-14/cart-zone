import React from "react";
import { FaShoppingCart, FaHouseUser } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import ProductForm from "./ProductFrom";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Navbar = () => {
  const quantity = useSelector((state) => state.products.totalQuantity);
  const total = useSelector((state) => state.products.priceTotal);

  return (
    <div>
      <header className="navbar bg-base-200 p-auto mx-auto py-auto flex  w-full">
        <Link to="/" className="flex-1">
          <div className="w-full flex justify-start ml-0 lg:ml-20 mt-1">
            <img className="w-12 lg:w-20 " src={logo} alt="cart-Zone" />
            <h1 className="text-start lg:text-center text-xl lg:text-3xl mt-2 px-2 font-semibold lg:font-bold text-secondary">
              Cart
              <span className="text-primary font-bold border-r-2 lg:border-r-4  px-2 border-secondary">
                -Zone
              </span>
            </h1>
          </div>
        </Link>

        <div className="flex-none ml-1">
          <ProductForm />
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle mx-0 lg:mx-4"
            >
              <div className="indicator text-xl lg:text-3xl  text-accent ">
                <FaShoppingCart />

                <span className="badge badge-sm lg:badge-md   indicator-item text-accent-focus bg-accent-content border-none text-xl">
                  {quantity}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{quantity} Items</span>
                <span className="text-secondary font-semibold text-xl">
                  Subtotal: ${total}
                </span>
                <Link to="/cart" className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <button className="btn-glass text-2xl text-accent m-2">
              <FaHouseUser />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300  rounded-box w-52 text-primary-focus"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <SwitchTheme />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
