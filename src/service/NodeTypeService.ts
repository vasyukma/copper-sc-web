import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INodeType } from '../model/INodeType';

export const nodeTypeApi = createApi({
  reducerPath: 'nodeTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v0',
    // baseUrl: "http://192.168.30.149:18090/api/v0",
  }),
  endpoints: (build) => ({
    fetchAllNodeTypes: build.query<INodeType[], null>({
      query: () => ({
        url: `/links`,
      }),
    }),
  }),
});
