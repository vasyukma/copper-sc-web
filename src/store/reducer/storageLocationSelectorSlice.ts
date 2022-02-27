import { createSlice } from '@reduxjs/toolkit';
import { INode } from '../../model/Node';

interface IInitialState {
  currentStorageLocation: INode | undefined;
  selectedStorageLocation: INode | undefined;
  selectedStorageLocationChild: INode | undefined;
}

const initialState: IInitialState = {
  currentStorageLocation: undefined,
  selectedStorageLocation: undefined,
  selectedStorageLocationChild: undefined,
};

const storageLocationSelectorSlice = createSlice({
  name: 'storageLocationsSelector',
  initialState,
  reducers: {
    setCurrentStorageLocation(state, action) {
      state.currentStorageLocation = action.payload;
    },
    setSelectedStorageLocation(state, action) {
      state.selectedStorageLocationChild = undefined;
      state.selectedStorageLocation = action.payload;
    },
    setSelectedStorageLocationChild(state, action) {
      state.selectedStorageLocationChild = action.payload;
      state.selectedStorageLocation = undefined;
    },
  },
});

export default storageLocationSelectorSlice.reducer;

export const {
  setCurrentStorageLocation,
  setSelectedStorageLocation,
  setSelectedStorageLocationChild,
} = storageLocationSelectorSlice.actions;
