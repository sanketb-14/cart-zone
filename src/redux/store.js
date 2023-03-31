import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers";


const rootReducer = combineReducers({
  products: productsReducer,
  // other reducers
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
