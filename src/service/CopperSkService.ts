import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILink } from "../model/ILink";
import { INode } from "../model/INode";
import { ITail } from "../model/ITail";
import { INodePath } from "../model/INodePath";
import { INodeType } from "../model/INodeType";

export const copperSkApi = createApi({
  reducerPath: "copperSkApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080/api/v0",
    // baseUrl: "http://192.168.30.149:8080/api/v0",
    baseUrl: "http://192.168.30.149:18090/api/v0",
  }),
  tagTypes: ["Links", "Tails", "Nodes", "NodeTypes"],
  endpoints: (build) => ({
    fetchAllLinks: build.query<ILink[], string>({
      query: () => ({
        url: `/links`,
      }),
      providesTags: (result) => ["Links"],
    }),
    fetchTailsLink: build.query<ITail[], number>({
      query: (linkId) => ({
        url: `/links/${linkId}/tails`,
      }),
      providesTags: (result) => ["Tails"],
    }),
    postTail: build.mutation<ITail, ITail>({
      query: (tail) => ({
        url: `/tails`,
        method: "POST",
        body: tail,
      }),
      invalidatesTags: ["Tails"],
    }),
    putLink: build.mutation<ILink, ILink>({
      query: (link) => ({
        url: `/links`,
        method: "PUT",
        body: link,
      }),
      invalidatesTags: ["Links"],
    }),
    fetchChildrenNode: build.query<INode[], number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/children`,
      }),
      providesTags: (result) => ["Nodes"],
    }),
    fetchNodePath: build.query<INodePath, number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}/path`,
      }),
      providesTags: (result) => ["Nodes"],
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
      providesTags: (result) => ["Nodes"],
    }),
    fetchRootNode: build.query<INode, string>({
      query: () => ({
        url: `/nodes/root`,
      }),
      providesTags: (result) => ["Nodes"],
    }),
    fetchNode: build.query<INode, number>({
      query: (nodeId) => ({
        url: `/nodes/${nodeId}`,
      }),
      providesTags: (result) => ["Nodes"],
    }),
    putNode: build.mutation<INode, INode>({
      query: (node) => ({
        url: `/nodes`,
        method: "PUT",
        body: node,
      }),
      invalidatesTags: ["Nodes"],
    }),
    fetchAllNodeTypes: build.query<INodeType[], string>({
      query: () => ({
        url: `/node-types`,
      }),
      providesTags: (result) => ["NodeTypes"],
    }),
  }),
});
