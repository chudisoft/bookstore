import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    'Action',
    'Science Fiction',
    'Economy',
    'Music',
  ],
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
      state.value.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.value.pop(initialState.value.find((x) => x === action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
