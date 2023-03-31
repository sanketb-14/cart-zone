import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
});
export  default fetchProducts
