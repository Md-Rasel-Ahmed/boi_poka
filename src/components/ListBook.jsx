import React, { useEffect, useState } from "react";
import List from "./List";
import { useLoaderData } from "react-router";
import { getData } from "../utils/db";

export default function ListBook() {
  const [readBooks, setReadBooks] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const fetchReadBook = async () => {
      const getDataFromLs = getData();
      const filterReadBooks = books?.filter((book) =>
        getDataFromLs.includes(book.bookId)
      );
      setReadBooks(filterReadBooks);
    };
    fetchReadBook();
  }, [books]);

  return (
    <div className="w-10/12 mx-auto py-5">
      <h1 className="text-3xl font-bold text-center bg-gray-200 p-4 mt-5">
        Books
      </h1>
      {/* name of each tab group should be unique */}
      <div class="relative mx-auto w-48 mt-5 ">
        <select class="block w-full px-4 py-2 pr-8 bg-gray-300 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="" disabled selected hidden>
            Sort by
          </option>
          <option value="rating">Rating</option>

          <option value="pages">Number of Pages</option>
          <option value="years">Years</option>
        </select>

        {/* <!-- Arrow Icon --> */}
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
      </div>

      <div className="tabs tabs-lift mt-5">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-white border-gray-300  text-black"
          aria-label="Read"
          defaultChecked
        />
        <div className="tab-content border-gray-300 p-6">
          {readBooks?.map((book) => (
            <List key={book.bookId} book={book}></List>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-white border-gray-300 text-black"
          aria-label="Wishlist"
        />
        <div className="tab-content  border-gray-300 p-6">Tab content 2</div>
      </div>
    </div>
  );
}
