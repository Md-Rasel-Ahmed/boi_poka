import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { getData, setData } from "../utils/db";
import { toast } from "react-toastify";

export default function BookDetails() {
  const books = useLoaderData();
  let params = useParams();
  const id = parseInt(params.bookId);

  const findBook = books.find((b) => b.bookId === id);

  const handleRead = (id) => {
    let dbData = getData();
    if (dbData.includes(id)) {
      return toast.error("The book already exited on the read lists");
    }
    setData(id);
    toast.success("The book added on the read lists");
  };

  return (
    <div className="hero bg-gray-300 w-7/10 my-5 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img src={findBook?.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{findBook.bookName}</h1>
          <p className="mt-2">By : {findBook.author}</p>
          <div className="divider divider-info"></div>

          <p>Fiction</p>
          <div className="divider divider-info"></div>

          <p className="py-6">
            <span className="font-bold">Review : </span>
            {findBook.review}
          </p>
          <div>
            <div className="flex gap-3">
              <p className="font-bold">Tags</p>
              {findBook.tags.map((tag, i) => (
                <p className="text-green-500" key={i}>
                  {" "}
                  # {tag}
                </p>
              ))}
            </div>
            <div className="divider divider-info"></div>
          </div>
          <div>
            <p>
              <span>Number of Pages : </span>
              <span className="font-bold">{findBook.totalPages}</span>
            </p>
            <p>
              <span>
                Publisher :{" "}
                <span className="font-bold">{findBook.publisher}</span>{" "}
              </span>
            </p>
            <p>
              <span>Year of Publishing : </span>
              <span className="font-bold">{findBook.yearOfPublishing}</span>
            </p>
            <p>
              <span>Rating : </span>
              <span className="font-bold">{findBook.rating}</span>
            </p>
          </div>
          <div className="flex gap-1 mt-2">
            <button
              onClick={() => handleRead(findBook.bookId)}
              className="btn btn-outline btn-sm"
            >
              Read
            </button>
            <button className="btn btn-info btn-sm">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
