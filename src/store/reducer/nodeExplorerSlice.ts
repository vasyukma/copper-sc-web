import { createSlice } from '@reduxjs/toolkit';
import { INode } from '../../model/INode';

interface IInitialState {
  currentNode: INode | undefined;
  selectedNode: INode | undefined;
}

const initialState: IInitialState = {
  currentNode: undefined,
  selectedNode: undefined,
};

const nodeExplorerSlice = createSlice({
  name: 'nodeTree',
  initialState: initialState,
  reducers: {
    setCurrentNode(state, action) {
      state.currentNode = action.payload;
    },
    setSelectedNode(state, action) {
      state.selectedNode = action.payload;
    },
  },
});

export default nodeExplorerSlice.reducer;

export const { setCurrentNode, setSelectedNode } = nodeExplorerSlice.actions;
