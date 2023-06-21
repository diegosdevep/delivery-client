import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FIREBASE_PATH_URL } from "@env";
// Define a service using a base URL and expected endpoints
export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  //whrite the base URL from the .ENV variable
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_PATH_URL || "" }),
  tagTypes: ["postUser", "deleteUser", "updateUser"],

  //Endpoints with the base URL integrated
  endpoints: (builder) => ({
    //Action for query the data base of Firebase
    getAllusers: builder.query({
      //expected the URL into to the string
      query: () => ``,
      //when somebody of the querys is call and they have the invalidateTag, the query GETALLUSERS will be called for the actualization of the users
      providesTags:  ["postUser", "deleteUser", "updateUser"]

    }),

    postUsers: builder.mutation({
      query: (newUser) => ({
        url: "tasks",
        method: "post",
        body: newUser,
      }),
      invalidatesTags: ["postUser"],
    }),
  }),
});
