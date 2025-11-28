import React from "react";
import Chart from "./Chart";
import { useLoaderData } from "react-router";

export default function ReadChats() {
  const books = useLoaderData();
  return (
    <div className="w-3/5 mx-auto my-5">
      <Chart books={books}></Chart>
    </div>
  );
}
