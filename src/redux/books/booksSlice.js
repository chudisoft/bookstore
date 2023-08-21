import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentage: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload);
    },
    removeBook: (state, action) => {
      state.value.pop(initialState.value.find((x) => x.title === action.payload.title));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
