import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {middleware as apiSliceMiddleware} from './apiSlices/apiSlice';
import reducer from './slices/index';
const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSliceMiddleware),
  enhancers: getDefaultEnhancers => getDefaultEnhancers(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
