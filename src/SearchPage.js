import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Books/Book';

class SearchPage extends Component {
  state = {
	query: '',
    matchingBooks: [],
  }

  handleQueryInput = (e) => {
	e.preventDefault();
    const { books } = this.props;
    const query = e.target.value;
    const matchingBooks = query.length ? books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())) : [];
    this.setState({ 
      matchingBooks,
      query,
    });
  }

  render() {
    const { matchingBooks } = this.state;
    return (
      <div className="search-books">
      
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
		  <div className="search-books-input-wrapper">
			{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
            */}
			<input
			  type="text" 
			  placeholder="Search by title or author"
			  value={this.state.query}
			  onChange={this.handleQueryInput}
			/>
		</div>
	</div>

 	<div className="search-books-results">
	  <ol className="books-grid">
	    {matchingBooks.map(book => <Book book={book} onSelectShelf={this.props.onSelectShelf} />)}
	  </ol>
	</div>

  </div>);
  }
}

export default SearchPage;
