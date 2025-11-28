import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>

      <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <Link
        to={"/"}
        className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
