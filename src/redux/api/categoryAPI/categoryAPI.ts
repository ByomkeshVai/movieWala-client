import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => {
        return {
          url: "/categories",
          method: "GET",
        };
      },
      transformResponse: (response: TApiRequest) => {
        return response?.data?.categories;
      },
      providesTags: ["category"],
    }),
    AddCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/categories",
          method: "POST",
          body: data,
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["category"],
    }),

    DeleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/categories/${id}`,
          method: "DELETE",
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryAPI;
