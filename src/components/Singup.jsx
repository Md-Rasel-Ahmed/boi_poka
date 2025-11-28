import React from "react";
import { Link } from "react-router";

export default function Singup() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Password</label>
            <input
              type="password"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <p class="text-center mt-4 text-sm">
          Already have an account?
          <Link class="text-blue-600 hover:underline" to={"/singin"}>
            Sing In
          </Link>
        </p>
      </div>
    </div>
  );
}
