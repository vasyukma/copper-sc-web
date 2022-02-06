import { createSlice } from '@reduxjs/toolkit';
import { ILink } from '../../model/ILink';
import { INode } from '../../model/INode';
import { ITail } from '../../model/ITail';

interface IInitialState {
  currentLink: ILink | undefined;
  currentTail: ITail | undefined;
  selectedPathNode: INode | undefined;
  selectedNodeChildren: INode | undefined;
  selectedChildNode: INode | undefined;
}

const initialState: IInitialState = {
  currentLink: undefined,
  currentTail: undefined,
  selectedPathNode: undefined,
  selectedNodeChildren: undefined,
  selectedChildNode: undefined,
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setCurrentLink(state, action) {
      state.currentLink = action.payload;
      state.currentTail = undefined;
    },
    setCurrentTail(state, action) {
      state.currentTail = action.payload;
    },
    setSelectedPathNode(state, action) {
      state.selectedPathNode = action.payload;
    },
    setSelectedNodeChildren(state, action) {
      state.selectedNodeChildren = action.payload;
    },
    setSelectedChildNode(state, action) {
      state.selectedChildNode = action.payload;
    },
  },
});

export default linksSlice.reducer;

export const {
  setCurrentLink,
  setCurrentTail,
  setSelectedPathNode,
  setSelectedNodeChildren,
  setSelectedChildNode,
} = linksSlice.actions;
