import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, comments, edit, remove, updateProgress }) => {
  Book.propTypes = {
    book: PropTypes.array.isRequired,
    comments: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    updateProgress: PropTypes.func.isRequired,
  };

  return (
    <div className="book">
      <div>
        <h4>{book.category}</h4>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <div className="button-groups">
          <button type="button" onClick={() => comments(book)}>
            Comments
          </button>
          <button type="button" onClick={() => remove(book)}>
            Remove
          </button>
          <button type="button" onClick={() => edit(book)}>
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="percentage">
          <span className="fa fa-percentage"></span>
          <div className="block">
            <label>
              <span>{40}</span>
              <span>% </span>
            </label>
            <label>Completed</label>
          </div>
        </div>
        <div className="bar"></div>
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <label>{book.chapter}</label>
          <button type="button" onClick={() => updateProgress(book)}>
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
