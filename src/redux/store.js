import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';
// import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    // counter: counterReducer,
  },
});

export default store;
