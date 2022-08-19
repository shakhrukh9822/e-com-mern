import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartProductsSlice = createSlice({
  name: "cartProductsSlice",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = action.payload;

    //   let existingItem = current(state.cartItems).find(
    //     (cartItem) => cartItem._id === item._id
    //   );

    //   console.log(item);

    //   if (existingItem) {
    //     existingItem.productQty++;
    //   } else {
    //     state.cartItems.push({ item, productQty: 1 });
    //   }
    // },
    // deleteFromCart:,
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item._id !== action.payload // id
      );
      state.cart = removeItem;
    },
  },
});

export const cartItems = (state) => state.cartProducts;
export const cartProductsActions = cartProductsSlice.actions;
export const cartProductsReducer = cartProductsSlice.reducer;
