import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILink } from '../model/ILink';

export const copperSkApi = createApi({
  reducerPath: 'copperSkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v0',
    // baseUrl: 'http://192.168.30.149:18090/api/v0',
  }),
  endpoints: (build) => ({
    fetchAllLinks: build.query<ILink[], string>({
      query: () => ({
        url: `/links`,
      }),
    }),
    fetchChildrenLinks: build.query<ILink[], string>({
      query: (linkId) => ({
        url: `/links/{linkId}/tails`,
      }),
    }),
  }),
});
