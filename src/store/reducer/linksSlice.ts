import { createSlice } from '@reduxjs/toolkit';
import { ILink } from '../../model/ILink';
import { INode } from '../../model/INode';
import { ITail } from '../../model/ITail';

interface IInitialState {
  currentLink: ILink | undefined;
  currentTail: ITail | undefined;
  selectedPathNode: INode | undefined;
  selectedChildrenNode: INode | undefined;
}

const initialState: IInitialState = {
  currentLink: undefined,
  currentTail: undefined,
  selectedPathNode: undefined,
  selectedChildrenNode: undefined,
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
    setSelectedChildrenNode(state, action) {
      state.selectedChildrenNode = action.payload;
    },
  },
});

export default linksSlice.reducer;

export const {
  setCurrentLink,
  setCurrentTail,
  setSelectedPathNode,
  setSelectedChildrenNode,
} = linksSlice.actions;
