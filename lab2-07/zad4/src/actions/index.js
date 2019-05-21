import uuid from "uuid/v4";

export const ACTION_TYPES = {
  ADD_BOOK: "ADD_BOOK",
  REMOVE_BOOK: "REMOVE_BOOK"
};

export const addBook = bookName => ({
  type: ACTION_TYPES.ADD_BOOK,
  book: { id: uuid(), name: bookName }
});

export const removeBook = bookId => ({
  type: ACTION_TYPES.REMOVE_BOOK,
  bookId
});
