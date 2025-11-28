import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Singin from "./components/Singin.jsx";
import Singup from "./components/Singup.jsx";
import ListBook from "./components/ListBook.jsx";
import ReadChats from "./components/ReadChats.jsx";
import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: "/singin", element: <Singin></Singin> },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
      { path: "/singup", element: <Singup></Singup> },
      {
        path: "/listbooks",
        element: <ListBook></ListBook>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/readchats",
        element: <ReadChats></ReadChats>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,<ToastContainer></ToastContainer>
  </StrictMode>
);
