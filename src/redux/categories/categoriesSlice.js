import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories.pop(initialState.categories.find((x) => x === action.payload));
    },
    checkStatus: (state) => {
      state.categories = state.categories.length === 0 ? ['Under construction']
        : state.categories;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory, checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
