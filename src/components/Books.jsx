import React, { useEffect, useState } from "react";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center py-5">Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {books?.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
}
