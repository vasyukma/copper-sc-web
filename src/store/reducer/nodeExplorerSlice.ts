import { createSlice } from "@reduxjs/toolkit";
import { INode } from "../../model/INode";

interface IInitialState {
  currentNode: INode | undefined;
  selectedNode: INode | undefined;
  isEditNode: boolean;
  isCreateNode: boolean;
}

const initialState: IInitialState = {
  currentNode: undefined,
  selectedNode: undefined,
  isEditNode: false,
  isCreateNode: false,
};

const nodeExplorerSlice = createSlice({
  name: "nodeTree",
  initialState: initialState,
  reducers: {
    setCurrentNode(state, action) {
      state.currentNode = action.payload;
      // if (state.isEditNode) {
      state.isEditNode = false;
      state.isCreateNode = false;
      // }
    },
    setSelectedNode(state, action) {
      state.selectedNode = action.payload;
    },
    setIsEditNode(state, action) {
      state.isEditNode = action.payload;
    },
    setIsCreateNode(state, action) {
      state.isCreateNode = action.payload;
    },
    offCreateEditNode(state) {
      state.isEditNode = false;
      state.isCreateNode = false;
    },
    // toggleIsEditNode(state) {
    //   if (state.isEditNode) {
    //     state.isEditNode = false;
    //   } else {
    //     state.isEditNode = true;
    //   }
    // },

    // toggleIsCreateNode(state) {
    //   if (state.isCreateNode) {
    //     state.isCreateNode = false;
    //   } else {
    //     state.isCreateNode = true;
    //   }
    // },
  },
});

export default nodeExplorerSlice.reducer;

export const {
  setCurrentNode,
  setSelectedNode,
  setIsEditNode,
  setIsCreateNode,
  // toggleIsCreateNode,
  // toggleIsEditNode,
  offCreateEditNode,
} = nodeExplorerSlice.actions;
