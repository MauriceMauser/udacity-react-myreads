import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelves/Shelf';

class MainPage extends Component {
  render() {
    const { onSelectShelf, books } = this.props;
  	return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      
      <div className="list-books-content">
      <div>
        <Shelf
      	  shelf="Currently Reading"
      	  books={books.filter(book => book.shelf === 'currentlyReading')}
		  onSelectShelf={onSelectShelf}
  		/>
	    <Shelf
		  shelf="Want to Read"
		  books={books.filter(book => book.shelf === 'wantToRead')}
		  onSelectShelf={onSelectShelf}
		/>
	    <Shelf
		  shelf="Read"
		  books={books.filter(book => book.shelf === 'read')}
		  onSelectShelf={onSelectShelf}
		/>
 	  </div>
    </div>
    <div className="open-search">
	  <Link to="/search">Add a book</Link>
	</div>
  </div>);
  }
}

export default MainPage;
