import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { copperSkApi } from '../service/CopperSkService';
import linksSlice from './reducer/linksSlice';
import nodeExplorerSlice from './reducer/nodeExplorerSlice';
import nodeTypeReducer from './reducer/NodeTypeSlice';
import storageLocationSelectorSlice from './reducer/storageLocationSelectorSlice';
import crossingSlice from './reducer/crossingSlice';

const rootReducer = combineReducers({
  linksSlice,
  nodeExplorerSlice,
  nodeTypeReducer,
  storageLocationSelectorSlice,
  crossingSlice,
  [copperSkApi.reducerPath]: copperSkApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        // .concat(nodeTypeApi.middleware)
        .concat(copperSkApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
