import { configureStore } from "@reduxjs/toolkit";

// reducers
import { productsApiSlice } from "./slices/products/products";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
