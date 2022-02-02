import { ILink } from '../../model/ILink';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { ITail } from '../../model/ITail';

interface IInitialState {
  currentLink: ILink | undefined;
  currentTail: ITail | undefined;
}

const initialState: IInitialState = {
  currentLink: undefined,
  currentTail: undefined,
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
  },
});

export default linksSlice.reducer;

export const { setCurrentLink, setCurrentTail } = linksSlice.actions;
