import { firebaseApi } from "../api/firebaseApi";

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetAllusersQuery, useLazyGetAllusersQuery } = firebaseApi;
