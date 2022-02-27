import { createSlice } from '@reduxjs/toolkit';
interface IInintalStatie {
  isCrossTypeCreateFormShow: boolean;
}

const initialState: IInintalStatie = {
  isCrossTypeCreateFormShow: false,
};

const crossingSlice = createSlice({
  name: 'crossing',
  initialState,
  reducers: {
    showCrossTypeCreateForm(state) {
      state.isCrossTypeCreateFormShow = true;
    },
    closeCrossTypeCreateForm(state) {
      state.isCrossTypeCreateFormShow = false;
    },
  },
});

export default crossingSlice.reducer;

export const { closeCrossTypeCreateForm, showCrossTypeCreateForm } =
  crossingSlice.actions;
