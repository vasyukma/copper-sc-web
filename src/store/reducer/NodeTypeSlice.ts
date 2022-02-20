import { createSlice } from '@reduxjs/toolkit';
import { INodeType } from '../../model/NodeType';

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
  reducers: {},
  extraReducers: {},
});

export default nodeTypeSlice.reducer;
