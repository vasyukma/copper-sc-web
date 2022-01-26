import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import nodeTypeReducer from './reducer/NodeTypeSlice';
import { nodeTypeApi } from '../service/NodeTypeService';
import { copperSkApi } from '../service/CopperSkService';

const rootReducer = combineReducers({
  // counterReducer,
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
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
// setupListeners(setupStore().dispatch);
