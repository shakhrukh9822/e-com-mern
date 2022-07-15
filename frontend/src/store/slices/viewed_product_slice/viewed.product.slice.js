import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const viewedProductsAdapter = createEntityAdapter({
  selectId: (viewedProduct) => viewedProduct._id,
});

const initialState = viewedProductsAdapter.getInitialState();

const viewedProductsSlice = createSlice({
  name: "viewedProductsSlice",
  initialState,
  reducers: {
    addViewedProduct: viewedProductsAdapter.addOne,
    deleteViewedProduct: viewedProductsAdapter.removeOne,
  },
});

export const { selectAll: selectAllViewedProducts } =
  viewedProductsAdapter.getSelectors((state) => state.viewedProducts);

export const viewedProductsActions = viewedProductsSlice.actions;
export const viewedProductsReducer = viewedProductsSlice.reducer;
