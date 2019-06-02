import { connect } from "react-redux";

import BooksList from "components/BooksList/BooksList";

const getBooks = state => state.books;

const mapStateToProps = state => {
  return {
    books: getBooks(state)
  };
};

const BooksListContainer = connect(mapStateToProps)(BooksList);

export default BooksListContainer;
