import { combineReducers } from "@reduxjs/toolkit";

// reducers
import { cartProductsReducer } from "./slices/cart_slice/cart_slice";
import { productsApiSlice } from "./slices/products_slice/products.slice";
import { categoryApiSlice } from "./slices/categories_slice/categories.slice";
import { likedProductsReducer } from "./slices/liked_products_slice/liked.products.slice";
import { viewedProductsReducer } from "./slices/viewed_product_slice/viewed.product.slice";
import { compareProductsReducer } from "./slices/compare_products_slice/compare.products.slice";
import { userAuthentificationReducers } from "./slices/user_authentification_slice/user.authentification.slice";

const rootReducer = combineReducers({
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
  viewedProducts: viewedProductsReducer,
  likedProducts: likedProductsReducer,
  compareProducts: compareProductsReducer,
  userAuthentification: userAuthentificationReducers,
  cartProducts: cartProductsReducer,
});

export default rootReducer;
