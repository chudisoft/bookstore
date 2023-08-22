import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      percentage: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
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
      state.value.pop(initialState.value.find((x) => x.item_id === action.payload.item_id));
      let i = 1;
      state.value.forEach((x) => { x.item_id = `item ${(i += 1)}`; });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
