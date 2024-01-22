import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";
import { baseAPI } from "../baseAPI";

const movieAPI = baseAPI
  .enhanceEndpoints({ addTagTypes: ["movie"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      Getmovie: builder.query({
        query: (params) => {
          // const params = new URLSearchParams();
          // if (property) {
          //   params.append(property, value);
          // }
          return {
            url: "/movies",
            method: "GET",
            params: params,
          };
        },
        transformResponse: (response: TApiRequest) => {
          return response.data.result;
        },
        providesTags: ["movie"],
      }),
      SingleMovie: builder.query({
        query: (id) => {
          return {
            url: `/movies/${id}`,
            method: "GET",
          };
        },
        transformResponse: (response: TApiResponse) => {
          return response.data;
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
      FeaturedChange: builder.mutation({
        query: ({ id, data }) => {
          console.log(id, data);
          return {
            url: `/movies/change-featured/${id}`,
            method: "PUT",
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
  useSingleMovieQuery,
  useFeaturedChangeMutation,
  useAddMovieMutation,
  useDeleteMovieMutation,
  useUpdateMovieMutation,
} = movieAPI;
