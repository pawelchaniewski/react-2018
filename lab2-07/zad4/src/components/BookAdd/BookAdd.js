import React, { useState } from "react";

const BookAdd = ({ onAddBook }) => {
  const [bookName, setBookName] = useState("");

  const handleAddBook = () => {
    onAddBook(bookName);
    setBookName("");
  };
  return (
    <div>
      <input value={bookName} onChange={e => setBookName(e.target.value)} />
      <button onClick={handleAddBook} disabled={bookName.length === 0}>
        Dodaj
      </button>
    </div>
  );
};

export default BookAdd;
