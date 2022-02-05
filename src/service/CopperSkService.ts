import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILink } from '../model/ILink';
import { INode } from '../model/INode';
import { ITail } from '../model/ITail';
import { INodePath } from '../model/INodePath';

export const copperSkApi = createApi({
  reducerPath: 'copperSkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v0',
    // baseUrl: "http://192.168.30.149:18090/api/v0",
  }),
  tagTypes: ['Links'],
  endpoints: (build) => ({
    fetchAllLinks: build.query<ILink[], string>({
      query: () => ({
        url: `/links`,
      }),
      providesTags: (result) => ['Links'],
    }),
    fetchTailsLink: build.query<ITail[], number>({
      query: (linkId) => ({
        url: `/links/${linkId}/tails`,
      }),
    }),
    putLink: build.mutation<ILink, ILink>({
      query: (link) => ({
        url: `/links`,
        method: 'PUT',
        body: link,
      }),
      invalidatesTags: ['Links'],
    }),
    fetchChildrenNode: build.query<INode[], number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/children`,
      }),
    }),
    fetchNodePath: build.query<INodePath, number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/path`,
      }),
    }),
    // fetchTextPathNode: build.query<INodePath, number>({
    //   query: (nodeId) => ({
    //     url: `/nodes/${nodeId}/text-path`,
    //   }),
    // }),
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
