import React from 'react';
import Book from '../Books/Book';

const Shelf = ({ shelf, books = [], onSelectShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => <Book key={book.id} book={book} onSelectShelf={onSelectShelf} />)}
      </ol>
    </div>
  </div>
);
export default Shelf;
