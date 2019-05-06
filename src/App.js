import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  onSelectShelf = async (book, shelf) => {
    book.shelf = shelf;
    this.setState(currentState => { 
      books: currentState.books.filter(b => b.id !== book.id).push(book),
    }, () => BooksAPI.update(book, shelf));
  }

  componentDidMount() {
  	BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <MainPage onSelectShelf={this.onSelectShelf} books={this.state.books} />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage books={this.state.books} onSelectShelf={this.onSelectShelf} />
            )}
          />
        </div>
	  </BrowserRouter>
    )
  }
}

export default BooksApp
