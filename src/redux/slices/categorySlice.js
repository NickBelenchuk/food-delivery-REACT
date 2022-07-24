import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: 'All',
  // categoryId: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
  },
});

export const { setCategoryName } = categorySlice.actions;

export default categorySlice.reducer;
