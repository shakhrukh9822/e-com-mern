// import { usersActions } from "./users/usersSlice";
import { viewedProductsActions } from "./slices/viewed_product_slice/viewed.product.slice";
import { likedProductsActions } from "./slices/liked_products_slice/liked.products.slice";
import { compareProductsActions } from "./slices/compare_products_slice/compare.products.slice";
import { userAuthentificationActions } from "./slices/user_authentification_slice/user.authentification.slice";

export const actions = {
  ...viewedProductsActions,
  ...likedProductsActions,
  ...compareProductsActions,
  ...userAuthentificationActions,
};
