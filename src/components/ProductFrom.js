import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { setCategory, setSearch, setSuggestions } from "../redux/reducers";
// import fetchProducts from "../redux/actions";

const ProductFrom = () => {
  const dispatch = useDispatch();
  const { category, search} = useSelector(
    (state) => state.products
  );
  
  

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearch(searchTerm));
    fetch(
      `https://fakestoreapi.com/products?title_like=${searchTerm}&category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSuggestions(data));
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://fakestoreapi.com/products?title=${search}&category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Product found
          console.log("Product:", data[0]);
        } else {
          // Product not found
          console.log("Product not found");
        }
      });
  };

  return (
    <form
      className="w-full flex font-semibold  border-secondary  mx-0 lg:mx-8 pb-1 "
      onSubmit={handleFormSubmit}
    >
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="select select-xs select-bordered lg:select-md w-1/4 max-w-xs text-accent-content  outline-none bg-accent"
        >
          <option defaultValue value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
     
      <label>
        <input
          id="search"
          value={search}
          type="text"
          onChange={handleSearchChange}
          placeholder="Search Here ..."
          className="bg-base-300  placeholder:text-accent outline-none w-full text-primary text-sm  lg:input-md p-1 "
        />
      </label>
     

      <button
        type="submit"
        className="btn btn-xs lg:btn-md bg-accent text-sm lg:text-2xl  text-accent-content  outline-none border-none items-center"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default ProductFrom;
