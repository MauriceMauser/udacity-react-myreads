import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelves/Shelf';

class MainPage extends Component {
  render() {
    const { onSelectShelf, books } = this.props;
    const shelves = [
       { title: 'Read', key: 'read' },
       { title: 'Want To Read', key: 'wantToRead' },
       { title: 'Currently Reading', key: 'currentlyReading' }
    ];
  	return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      
      <div className="list-books-content">
      <div>
        {
      	  shelves.map(shelf => (<Shelf 
      	    						shelf={shelf.title}
  									books={books.filter(book => book.shelf === shelf.key)}
  									onSelectShelf={onSelectShelf}
      	    					/>)
    	  )
  		}
 	  </div>
    </div>
    <div className="open-search">
	  <Link to="/search">Add a book</Link>
	</div>
  </div>);
  }
}

export default MainPage;
