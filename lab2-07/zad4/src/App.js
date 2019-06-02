import React from "react";
import { Provider } from "react-redux";

import store from "store";

import BookAddContainer from "containers/BookAddContainer/AddBooksContainer";
import BooksListContainer from "containers/BooksListContainer/BooksListContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>Dodaj nowa ksiazke</h3>
        <BookAddContainer />

        <h3>Lista ksiazek</h3>
        <BooksListContainer />
      </div>
    </Provider>
  );
}

export default App;
