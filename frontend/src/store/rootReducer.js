import { combineReducers } from "@reduxjs/toolkit";

// reducers

import { productsApiSlice } from "./slices/products/products";
import { categoryApiSlice } from "./slices/categories/categories";
import { viewedProductsReducer } from "./slices/viewed_product_slice/viewed.product.slice";
import { likedProductsReducer } from "./slices/liked_products_slice/liked.products.slice";
import { compareProductsReducer } from "./slices/compare_products_slice/compare.products.slice";

const rootReducer = combineReducers({
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
  viewedProducts: viewedProductsReducer,
  likedProducts: likedProductsReducer,
  compareProducts: compareProductsReducer,
});

export default rootReducer;
