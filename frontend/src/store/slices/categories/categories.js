import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryAdapter = createEntityAdapter({
  selectId: (category) => category._id,
});

const initialState = categoryAdapter.getInitialState();

export const categoryApiSlice = createApi({
  reducerPath: "categories_api",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/api/v1/product-category",
      transformResponse: (response) => {
        const { categories } = response;

        return categoryAdapter.setAll(initialState, categories);
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApiSlice;

// return the query response object
export const selectCategoriesResults =
  categoryApiSlice.endpoints.getCategories.select();

// Create memoized selector
const selectCategoriesData = createSelector(
  [selectCategoriesResults],
  (categoryResult) => categoryResult?.data // normalized state object with ids & entities
);

export const { selectAll: selectAllCategories } = categoryAdapter.getSelectors(
  (state) => selectCategoriesData(state) ?? initialState
);
