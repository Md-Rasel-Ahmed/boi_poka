export default function List({ book }) {
  console.log(book);

  return (
    <div className=" bg-white shadow-md rounded-xl p-4 flex gap-4 border border-gray-200 mt-5">
      {/* Left: Image */}
      <img
        src={book.image}
        alt="book cover"
        className="w-36 h-48 object-cover rounded-lg"
      />

      {/* Right: Content */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{book.bookName}</h2>

          <p className="text-gray-600 font-medium mt-1">
            By : <span className="text-black">{book.author}</span>
          </p>

          <div className="text-gray-600 font-medium flex gap-5">
            <span className="font-bold">Tags</span>{" "}
            <span className="text-green-500">#{book.tags[0]}</span>
            <span className="text-green-500">#{book.tags[1]}</span>
            <span>Years of publishing {book.yearOfPublishing} </span>
          </div>

          <div className="flex gap-5 mt-5 text-gray-600 text-sm">
            <p>
              Publisher: <span className="text-black">{book.publisher}</span>
            </p>
            <p>
              Pages: <span className="text-black">{book.totalPages}</span>
            </p>
            <p>
              Language: <span className="text-black">English</span>
            </p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3 mt-4">
          <div className="badge badge-primary">Catagory : {book.category} </div>

          <div className="badge badge-warning">Rating : {book.rating}</div>

          <div className="badge badge-info">View Details</div>
        </div>
      </div>
    </div>
  );
}
