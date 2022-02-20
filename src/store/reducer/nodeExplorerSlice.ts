import { createSlice } from '@reduxjs/toolkit';
import { INode } from '../../model/Node';

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
  name: 'nodeTree',
  initialState: initialState,
  reducers: {
    setCurrentNode(state, action) {
      state.currentNode = action.payload;
      state.isEditNode = false;
      state.isCreateNode = false;
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
  },
});

export default nodeExplorerSlice.reducer;

export const {
  setCurrentNode,
  setSelectedNode,
  setIsEditNode,
  setIsCreateNode,
  offCreateEditNode,
} = nodeExplorerSlice.actions;
