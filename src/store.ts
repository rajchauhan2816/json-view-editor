import { combineReducers } from 'redux';
import { dataSlice } from './features/data/dataSlice';
import { textareaSlice } from './features/textarea/textareaSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  textarea: textareaSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({ reducer: rootReducer });
