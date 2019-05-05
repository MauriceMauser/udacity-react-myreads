import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import * as BooksAPI from './BooksAPI';
import Book from './Books/Book';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      matchingBooks: [],
    };
    this.debouncedAutocompleteSearch = debounce(this.autocompleteSearch, 300);
  }
  
  autocompleteSearch = (query) => {
    BooksAPI.search(query, 18)
      .then(books => this.setState({ matchingBooks: books || [] }));
  }

  handleQueryInput = (e) => {
    this.setState({ 
      query: e.target.value,
    }, () => {
      this.debouncedAutocompleteSearch(this.state.query);
    });
  }

  render() {
    const { query, matchingBooks } = this.state;
	console.log('matchingBooks: ', matchingBooks);
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
			  value={query}
			  onChange={this.handleQueryInput}
			/>
		</div>
	</div>

 	<div className="search-books-results">
	  <ol className="books-grid">
	    {
          query && matchingBooks.length ? matchingBooks
          							.filter(book => book.imageLinks && book.imageLinks.thumbnail)
									.map(book => <Book 
          											key={book.id}
          											book={book} 
													onSelectShelf={this.props.onSelectShelf} 
												 />) : ''
		}
	  </ol>
	</div>

  </div>);
  }
}

export default SearchPage;
