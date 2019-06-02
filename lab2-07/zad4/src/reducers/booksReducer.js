import { ACTION_TYPES } from "../actions";

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BOOK:
      return [...books, action.book];
    case ACTION_TYPES.REMOVE_BOOK:
      return books.filter(book => book.id !== action.bookId);
    default:
      return books;
  }
};

export default booksReducer;
