import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';
import NewBook from './NewBook';

function Books() {
  const [booksAvailable, setBooksAvailable] = useState([
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentage: 64,
      chapter: 'Chapter 17'
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentage: 8,
      chapter: 'Chapter 3: "A Lesson Learned"'
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction'
    },
  ]);
  const [categories, setCategories] = useState([
    'Action',
    'Science Fiction',
    'Economy',
    'Music',
  ]);

  const comments = ( book ) => {}
  const edit = ( book ) => {}
  const remove = ( book ) => {
    setBooksAvailable(booksAvailable.filter((x) => x !== book));
  }
  const updateProgress = (book) => {}
  const add = ( title, author, category ) => {
    const newBs = (
      [
        ...booksAvailable,
        {
          category: category,
          title: title,
          author: author,
          percentage: 0,
          chapter: 'Introduction'
        }
      ]
    );
    setBooksAvailable(newBs);
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
