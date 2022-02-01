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

const nodeExplorer = createSlice({
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

export default nodeExplorer.reducer;

export const { setCurrentNode, setSelectedNode } = nodeExplorer.actions;
