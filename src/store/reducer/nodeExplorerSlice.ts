import { createSlice } from '@reduxjs/toolkit';
import { INode } from '../../model/INode';

interface IInitialState {
  currentNode: INode | undefined;
  selectedNode: INode | undefined;
  isEditNode: boolean;
}

const initialState: IInitialState = {
  currentNode: undefined,
  selectedNode: undefined,
  isEditNode: false,
};

const nodeExplorerSlice = createSlice({
  name: 'nodeTree',
  initialState: initialState,
  reducers: {
    setCurrentNode(state, action) {
      state.currentNode = action.payload;
      if (state.isEditNode) {
        state.isEditNode = false;
      }
    },
    setSelectedNode(state, action) {
      state.selectedNode = action.payload;
    },
    setIsEditNode(state, action) {
      state.isEditNode = action.payload;
    },
  },
});

export default nodeExplorerSlice.reducer;

export const { setCurrentNode, setSelectedNode, setIsEditNode } =
  nodeExplorerSlice.actions;
