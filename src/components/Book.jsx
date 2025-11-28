import React from "react";
import { Link } from "react-router";

export default function Book({ book }) {
  return (
    <div className="card bg-gray-300  w-80 shadow-sm mt-5">
      <figure>
        <img className="w-100 h-50" src={book.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="tags flex gap-1">
          <p className="text-green-400  font-bold bg-gray-200 rounded-full text-center p-1">
            {book.tags[0]}
          </p>
          <p className="text-green-400   font-bold bg-gray-200 rounded-full text-center p-1">
            {book.tags[1]}
          </p>
        </div>

        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="text-lg">
          <span>By : </span>
          <span>{book.author}</span>
        </p>
        <div className="flex items-center justify-center  font-bold text-gray-400">
          <span className="tracking-widest">
            - - - - - - - - - - - - - - - - - - - - - -
          </span>
        </div>

        <div className="flex justify-between items-center mt-5 text-lg">
          <p>Fiction</p>
          <p className="flex justify-center items-center gap-1">
            {book.rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`book/${book.bookId}`}
            className="btn btn-info w-full text-white"
          >
            Book Details
          </Link>
        </div>
      </div>
    </div>
  );
}
