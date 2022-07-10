import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productAdapter = createEntityAdapter({
  selectId: (products) => products._id,
});

const initialState = productAdapter.getInitialState({
  productCount: 0,
});

export const productsApiSlice = createApi({
  reducerPath: "products_api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/v1/products",
      transformResponse: (response) => {
        const { products, productCount } = response;
        initialState.productCount = productCount;
        return productAdapter.setAll(initialState, products);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

// return the query response object
export const selectProductResults =
  productsApiSlice.endpoints.getProducts.select();

// Create memoized selector
const selectProductsData = createSelector(
  [selectProductResults],
  (productResult) => productResult?.data // normalized state object with ids & entities
);

export const { selectAll: selectAllProducts } = productAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
