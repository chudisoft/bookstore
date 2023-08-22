import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewBook = ({ add, categories }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);

  NewBook.propTypes = {
      add: PropTypes.func.isRequired,
      categories: PropTypes.array.isRequired,
  };

  return (
    <div className='new-book'>
        <h3>Add New Book</h3>
        <form
          onSubmit={
            (e) => {
              e.preventDefault();
              add(title, author, category);
            }
          }
        >
          <input
            required
            type="text"
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder='Author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <select
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            {
              categories.map((c) => (
                <option>{c}</option>
              ))
            }
          </select>
          <button type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default NewBook;
