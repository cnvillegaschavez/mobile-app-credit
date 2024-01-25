import {combineReducers} from '@reduxjs/toolkit';
import {
  reducerPath as apiSlicePath,
  reducer as apiSliceReducer,
} from '../apiSlices/apiSlice';

// Redux: Root Reducer
const reducer = combineReducers({
  [apiSlicePath]: apiSliceReducer,
});

// Destroy redux state
const rootReducer = (state, action) => {
  return reducer(state, action);
};

// Exports
export default rootReducer;
