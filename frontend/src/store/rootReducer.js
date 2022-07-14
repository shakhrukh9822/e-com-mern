import { combineReducers } from "@reduxjs/toolkit";

// reducers
import { productsApiSlice } from "./slices/products/products";
import { viewedProductsReducer } from "./slices/viewed_product_slice/viewed.product.slice";

const rootReducer = combineReducers({
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  viewedProducts: viewedProductsReducer,
});

export default rootReducer;
