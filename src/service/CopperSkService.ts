import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILink } from '../model/ILink';
import { INode } from '../model/INode';
import { ITail } from '../model/ITail';

export const copperSkApi = createApi({
  reducerPath: 'copperSkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v0',
    // baseUrl: "http://192.168.30.149:18090/api/v0",
  }),
  endpoints: (build) => ({
    fetchAllLinks: build.query<ILink[], string>({
      query: () => ({
        url: `/links`,
      }),
    }),
    fetchLinkTails: build.query<ITail[], string>({
      query: (linkId) => ({
        url: `/links/${linkId}/tails`,
      }),
    }),
    fetchChildrenNode: build.query<INode[], number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/children`,
      }),
    }),
    fetchNodeParentsCount: build.query<number, number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/parents-count`,
      }),
    }),
    fetchRootNode: build.query<INode, string>({
      query: () => ({
        url: `/nodes/root`,
      }),
    }),
    fetchNode: build.query<INode, number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}`,
      }),
    }),
  }),
});
