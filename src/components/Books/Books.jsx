import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import Book from './Book';
import NewBook from './NewBook';
import { fetchBooks, addBook, removeBook } from '../../redux/books/booksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

function Books() {  
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const categories = useSelector((state) => state.categories.categories);
  const error = useSelector((state) => state.books.error);
  const booksAvailable = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const comments = ( book ) => {}
  const edit = ( book ) => {}
  const remove = ( book ) => {
    dispatch(removeBook(book));
  }
  const updateProgress = (book) => {}
  const add = ( title, author, category ) => {
    dispatch(
      addBook(
        {
          item_id: uuidv4(),
          category,
          title,
          author,
        }
      )
    );
  }

  return (
    <div>
      <h2>Books</h2>
      <div>{error}</div>
      {
        booksAvailable.map((b) => 
          <Book 
            book={b}
            comments={comments}
            edit={edit}
            remove={remove}
            updateProgress={updateProgress}
          />
        )
      }
      <div>
        <hr />
        <NewBook add={add} categories={categories}/>
      </div>
    </div>
  )
}

Books.propTypes = {}

export default Books
