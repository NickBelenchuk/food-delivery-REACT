import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';
import catalogReducer from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    categoryReducer,
    cartReducer,
    catalogReducer,
  },
});
