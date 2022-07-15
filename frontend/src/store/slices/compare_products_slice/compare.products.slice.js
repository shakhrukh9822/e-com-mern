import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const compareProductsAdapter = createEntityAdapter({
  selectId: (comparedProduct) => comparedProduct._id,
});

const initialState = compareProductsAdapter.getInitialState();

const compareProductsSlice = createSlice({
  name: "compareProductsSlice",
  initialState,
  reducers: {
    addCompareProduct: compareProductsAdapter.addOne,
    deleteCompareProduct: compareProductsAdapter.removeOne,
  },
});

export const { selectAll: selectAllComparedProducts } =
  compareProductsAdapter.getSelectors((state) => state.compareProducts);

export const compareProductsActions = compareProductsSlice.actions;
export const compareProductsReducer = compareProductsSlice.reducer;
