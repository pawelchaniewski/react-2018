import React from "react";

import BooksListItem from "components/BooksListItem/BooksListItem";

const BooksList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <BooksListItem key={book.id} {...book} />
      ))}
    </div>
  );
};

BooksList.defaultProps = {
  books: []
};

export default BooksList;
