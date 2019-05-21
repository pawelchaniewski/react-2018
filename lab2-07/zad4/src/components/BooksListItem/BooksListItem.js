import React from "react";

const BooksListItem = ({ id, name }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Nazwa: {name}</p>
      <button>Usun</button>
      <button>Przeczytane</button>
    </div>
  );
};

export default BooksListItem;
