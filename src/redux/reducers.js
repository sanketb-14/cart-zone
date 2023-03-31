import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import fetchProducts from "./actions";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCategory: "All",
    category: "All",
    search: "",
    suggestions: [],
    cartItem: [],
    totalQuantity: 0,
    priceTotal: 0,
  },

  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setAddToCart: (state, action) => {
      state.cartItem.push(action.payload);
      state.totalQuantity = state.cartItem.length;
      state.priceTotal = state.cartItem.reduce((total, item) => {
        total += item.price;
        return Math.trunc(total);
      }, 0);
    },
    removeCartItem: (state, action) => {
       state.priceTotal = state.cartItem.reduce((total, item) => {
         total += item.price;
         return Math.trunc(total);
       }, 0);
     

      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity = state.cartItem.length;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setSelectedCategory,
  setCategory,
  setSearch,
  setSuggestions,
  setAddToCart,
  removeCartItem,
} = productsSlice.actions;

export default productsSlice.reducer;
