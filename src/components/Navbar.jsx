import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-gray-300  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink className={"bg-green-400 p-1 rounded text-white"} to={"/"}>
              Home
            </NavLink>
            <NavLink
              className={"bg-green-400 mt-1 p-1 rounded text-white"}
              to={"/listbooks"}
            >
              Lists Books
            </NavLink>
            <NavLink
              className={"bg-green-400 p-1 mt-1 rounded text-white"}
              to={"/readchats"}
            >
              Page To Read
            </NavLink>
            <NavLink
              className={"bg-green-400 p-1 mt-1 rounded text-white"}
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <a className="text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  gap-4">
          <NavLink className={"border-green-400 border p-2 rounded"} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={"border-green-400 border p-2 rounded"}
            to={"/listbooks"}
          >
            Lists Books
          </NavLink>
          <NavLink
            className={"border-green-400 border p-2 rounded"}
            to={"/readchats"}
          >
            Page To Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <NavLink className="btn bg-green-400 border-0" to={"/singin"}>
          Sing In
        </NavLink>
        <NavLink className="btn btn-info" to={"/singup"}>
          Sing Up
        </NavLink>
      </div>
    </div>
  );
}
