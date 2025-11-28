import React from "react";

export default function Banner() {
  return (
    <div className="hero bg-gray bg-gray-200 my-10 h-2/4">
      <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse w-5/6">
        <img
          src="./../src/assets/pngwing 1.png"
          className="lg:max-w-sm w-50 md:w-100 lg:w-100 lg:h-100  rounded-lg "
        />
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-xl font-bold flex flex-col gap-6">
            <span>Books to freshen up</span> <span>your bookshelf</span>
          </h1>

          <button className="btn btn-info mt-7">View The Lists</button>
        </div>
      </div>
    </div>
  );
}
