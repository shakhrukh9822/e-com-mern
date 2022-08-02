import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productAdapter = createEntityAdapter({
  selectId: (products) => products._id,
});

const initialState = productAdapter.getInitialState({
  productCount: 0,
  resultPerPage: 0,
  filteredProductCount: 0,
  products: [],
});

export const productsApiSlice = createApi({
  reducerPath: "products_api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (currentPage) => `/api/v1/products?page=${currentPage}`,
      transformResponse: (response) => {
        const { products, productCount, resultPerPage, filteredProductCount } =
          response;

        initialState.productCount = productCount;
        initialState.resultPerPage = resultPerPage;
        initialState.products = products;
        initialState.filteredProductCount = filteredProductCount;

        return productAdapter.setAll(initialState, products);
      },
      providesTags: ["Products"],
    }),
    getProductDetail: builder.query({
      query: (id) => `/api/v1/product/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useAddToFavouriteMutation,
} = productsApiSlice;

// return the query response object
export const selectProductResults =
  productsApiSlice.endpoints.getProducts.select();

// Create memoized selector
const selectProductsData = createSelector(
  [selectProductResults],
  (productResult) => productResult?.data // normalized state object with ids & entities
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productAdapter.getSelectors(
    (state) => selectProductsData(state) ?? initialState
  );
