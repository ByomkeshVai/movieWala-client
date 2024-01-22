import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";
import { baseAPI } from "../baseAPI";

export const categoryAPI = baseAPI
  .enhanceEndpoints({ addTagTypes: ["category"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCategory: builder.query({
        query: (categoryID = "") => {
          return categoryID
            ? {
                url: `/categories/${categoryID}`,
                method: "GET",
              }
            : {
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
      UpdateCategory: builder.mutation({
        query: ({ categoryID, body }) => {
          console.log(categoryID, body);
          return {
            url: `/categories/${categoryID}`,
            method: "PUT",
            body: body,
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
  useUpdateCategoryMutation,
} = categoryAPI;
