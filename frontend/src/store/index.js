import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// reducers
import { productsApiSlice } from "./slices/products_slice/products.slice";
import { categoryApiSlice } from "./slices/categories_slice/categories.slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [productsApiSlice.reducerPath, categoryApiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApiSlice.middleware, categoryApiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
