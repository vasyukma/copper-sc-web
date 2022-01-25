import { INodeType } from '../../model/INodeType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchNodeTypes } from './ActionCreators';

interface NodeTypeState {
  nodeTypes: INodeType[];
  isLoading: boolean;
  error: string;
}

const initialState: NodeTypeState = {
  nodeTypes: [],
  isLoading: false,
  error: 'ошибок нет',
};

export const nodeTypeSlice = createSlice({
  name: 'nodeType',
  initialState,
  reducers: {
    // nodeTypesFetching(state) {
    //   state.isLoading = true;
    // },
    // nodeTypesFetchingSuccess(state, action: PayloadAction<INodeType[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.nodeTypes = action.payload;
    // },
    // nodeTypesFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    // [fetchNodeTypes.fulfilled.type]: (
    //   state,
    //   action: PayloadAction<INodeType[]>
    // ) => {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.nodeTypes = action.payload;
    // },
    // [fetchNodeTypes.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchNodeTypes.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default nodeTypeSlice.reducer;
