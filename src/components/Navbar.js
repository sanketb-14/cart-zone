import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHouseUser, FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png";

import SwitchTheme from "./SwitchTheme";
const Navbar = (props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar bg-base-200 p-auto mx-auto py-auto">
      {isLargeScreen ? (
        <div className="flex-1">
          <div className="w-full flex justify-start ml-0 lg:ml-20 mt-1">
            <img className="w-12 lg:w-20 " src={logo} alt="cart-Zone" />
            <h1 className="text-start lg:text-center text-xl lg:text-3xl mt-2 px-2 font-semibold lg:font-bold text-secondary">
              Cart
              <span className="text-primary font-bold border-r-2 lg:border-r-4  px-2 border-secondary">
                -Zone
              </span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <div className="w-full flex justify-start ">
            <img className="w-12" src={logo} alt="cart-Zone" />
          </div>
        </div>
      )}

      <div className="flex-none ml-1">
        <form className="w-full flex font-semibold  border-secondary  mx-0 lg:mx-8 pb-1 ">
          <select className="select select-xs select-bordered lg:select-md w-1/4 max-w-xs text-accent-content  outline-none bg-accent">
            {props.menu.map((name,ind) => (
              <option key={ind}>{name}</option>
            ))}
            
          </select>
          <input
            type="text"
            placeholder="Search Here ..."
            className="bg-base-300  placeholder:text-accent outline-none w-full text-primary text-sm  lg:input-md p-1 "
          />
          <button
            type="submit"
            className="btn btn-xs lg:btn-md bg-accent text-sm lg:text-2xl  text-accent-content  outline-none border-none items-center"
          >
            <FaSearch />
          </button>
        </form>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle mx-0 lg:mx-4">
            <div className="indicator text-xl lg:text-3xl  text-accent ">
              <FaShoppingCart />

              <span className="badge badge-sm lg:badge-md   indicator-item text-accent text-xl">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
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
  );
};

export default Navbar;
