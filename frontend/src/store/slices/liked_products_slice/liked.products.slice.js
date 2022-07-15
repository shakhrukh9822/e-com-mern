import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const likedProductsAdapter = createEntityAdapter({
  selectId: (likedProduct) => likedProduct._id,
});

const initialState = likedProductsAdapter.getInitialState();

const likedProductsSlice = createSlice({
  name: "likedProductsSlice",
  initialState,
  reducers: {
    addLikedProduct: likedProductsAdapter.addOne,
    deleteLikedProduct: likedProductsAdapter.removeOne,
  },
});

export const { selectAll: selectAllLikedProducts } =
  likedProductsAdapter.getSelectors((state) => state.likedProducts);

export const likedProductsActions = likedProductsSlice.actions;
export const likedProductsReducer = likedProductsSlice.reducer;
