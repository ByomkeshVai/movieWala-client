import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";

export const languageAPI = createApi({
  reducerPath: "languageAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["language"],
  endpoints: (builder) => ({
    getLanguage: builder.query({
      query: (languageID = "") => {
        return languageID
          ? {
              url: `/languages/${languageID}`,
              method: "GET",
            }
          : {
              url: "/languages",
              method: "GET",
            };
      },
      transformResponse: (response: TApiRequest) => {
        return response?.data?.languages;
      },
      providesTags: ["language"],
    }),
    AddLanguage: builder.mutation({
      query: (data) => {
        return {
          url: "/languages",
          method: "POST",
          body: data,
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["language"],
    }),
    UpdateLanguage: builder.mutation({
      query: ({ languageID, body }) => {
        console.log(languageID, body);
        return {
          url: `/languages/${languageID}`,
          method: "PUT",
          body: body,
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["language"],
    }),

    DeleteLanguage: builder.mutation({
      query: (id) => {
        return {
          url: `/languages/${id}`,
          method: "DELETE",
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["language"],
    }),
  }),
});

export const {
  useGetLanguageQuery,
  useAddLanguageMutation,
  useDeleteLanguageMutation,
  useUpdateLanguageMutation,
} = languageAPI;
