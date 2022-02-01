import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { copperSkApi } from '../service/CopperSkService';
import nodeExplorer from './reducer/nodeExplorerSlice';
import nodeTypeReducer from './reducer/NodeTypeSlice';

const rootReducer = combineReducers({
  nodeExplorer,
  nodeTypeReducer,
  // [nodeTypeApi.reducerPath]: nodeTypeApi.reducer,
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
