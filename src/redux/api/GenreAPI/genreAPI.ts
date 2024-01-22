import { TApiRequest, TApiResponse } from "../../ReduxType/ReduxType";
import { baseAPI } from "../baseAPI";

const genreAPI = baseAPI
  .enhanceEndpoints({ addTagTypes: ["genre"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getGenre: builder.query({
        query: (genreID = "") => {
          return genreID
            ? {
                url: `/genres/${genreID}`,
                method: "GET",
              }
            : {
                url: "/genres",
                method: "GET",
              };
        },
        transformResponse: (response: TApiRequest) => {
          return response?.data?.genres;
        },
        providesTags: ["genre"],
      }),
      AddGenre: builder.mutation({
        query: (data) => {
          return {
            url: "/genres",
            method: "POST",
            body: data,
          };
        },
        transformResponse: (response: TApiResponse) => {
          return response;
        },
        invalidatesTags: ["genre"],
      }),
      UpdateGenre: builder.mutation({
        query: ({ genreID, body }) => {
          console.log(genreID, body);
          return {
            url: `/genres/${genreID}`,
            method: "PUT",
            body: body,
          };
        },
        transformResponse: (response: TApiResponse) => {
          return response;
        },
        invalidatesTags: ["genre"],
      }),

      DeleteGenre: builder.mutation({
        query: (id) => {
          return {
            url: `/genres/${id}`,
            method: "DELETE",
          };
        },
        transformResponse: (response: TApiResponse) => {
          return response;
        },
        invalidatesTags: ["genre"],
      }),
    }),
  });

export const {
  useGetGenreQuery,
  useAddGenreMutation,
  useDeleteGenreMutation,
  useUpdateGenreMutation,
} = genreAPI;
