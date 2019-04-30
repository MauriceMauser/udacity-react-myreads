import React, { Component } from 'react';
import Book from '../Books/Book';

class Shelf extends Component {
  render() {
    const { shelf, books = [], onSelectShelf } = this.props;
    console.log("shelf: ", books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
		  <ol className="books-grid">
			{books.map(book => <Book book={book} onSelectShelf={onSelectShelf} />)}			
		  </ol>
	   </div>
	</div>);
  }
}

export default Shelf;