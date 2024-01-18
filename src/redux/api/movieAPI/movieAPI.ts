import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["movie"],
  endpoints: (builder) => ({
    Getmovie: builder.query({
      query: (movieID = "") => {
        return movieID
          ? {
              url: `/movies/${movieID}`,
              method: "GET",
            }
          : {
              url: "/movies",
              method: "GET",
            };
      },
      transformResponse: (response: TApiRequest) => {
        return response?.data?.movies;
      },
      providesTags: ["movie"],
    }),
    AddMovie: builder.mutation({
      query: (data) => {
        return {
          url: "/movies/create-movie",
          method: "POST",
          body: data,
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["movie"],
    }),
    UpdateMovie: builder.mutation({
      query: ({ movieID, body }) => {
        console.log(movieID, body);
        return {
          url: `/movies/${movieID}`,
          method: "PUT",
          body: body,
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["movie"],
    }),

    DeleteMovie: builder.mutation({
      query: (id) => {
        return {
          url: `/movies/${id}`,
          method: "DELETE",
        };
      },
      transformResponse: (response: TApiResponse) => {
        return response;
      },
      invalidatesTags: ["movie"],
    }),
  }),
});

export const {
  useGetmovieQuery,
  useAddMovieMutation,
  useDeleteMovieMutation,
  useUpdateMovieMutation,
} = movieAPI;
