import { AppDispatch } from '../store';
import { nodeTypeSlice } from './NodeTypeSlice';
import { createAsyncThunk, ThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { INodeType } from '../../model/INodeType';

// export const fetchNodeTypes = () => async (dispatch: AppDispatch) => {
//   try {
//     // debugger;
//     dispatch(nodeTypeSlice.actions.nodeTypesFetching());
//     const response = await axios.get<INodeType[]>(
//       //   `https://jsonplaceholder.typicode.com/users`
//       'http://localhost:8080/api/v0/node-types'
//     );
//     dispatch(nodeTypeSlice.actions.nodeTypesFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(nodeTypeSlice.actions.nodeTypesFetchingError(error.message));
//   }
// };

// export const fetchNodeTypes = createAsyncThunk(
//   'nodeType/fetchAll',
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get<INodeType[]>(
//         `http://localhost:8080/api/v0/node-types`
//       );
//       return response.data;
//     } catch (error) {
//       thunkApi.rejectWithValue('Не удалось получить типы узлов');
//     }
//   }
// );
