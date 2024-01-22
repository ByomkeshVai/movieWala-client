import { baseAPI } from "../../api/baseAPI";

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
