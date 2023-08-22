import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';
import NewBook from './NewBook';
import { addBook, removeBook } from '../../redux/books/booksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

function Books() {  
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const categories = useSelector((state) => state.categories.categories);
  const booksAvailable = useSelector((state) => state.books.value);

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
          item_id: `item ${(booksAvailable.length + 1)}`,
          category: category,
          title: title,
          author: author,
          percentage: 0,
          chapter: 'Introduction'
        }
      )
    );
  }

  return (
    <div>
      <h2>Books</h2>
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
