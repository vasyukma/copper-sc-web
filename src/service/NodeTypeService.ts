import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INodeType } from '../model/INodeType';

export const nodeTypeApi = createApi({
  reducerPath: 'nodeTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v0',
  }),
  endpoints: (build) => ({
    fetchAllNodeTypes: build.query<INodeType[], string>({
      query: () => ({
        url: `/node-types`,
      }),
    }),
  }),
});
