import React from "react";
import { Link } from "react-router";

export default function Singin() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 class="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form class="space-y-4">
          {/* <!-- Email --> */}
          <div>
            <label class="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label class="block mb-1 font-medium">Password</label>
            <input
              type="password"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* <!-- Remember + Forgot --> */}
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              Remember me
            </label>

            <a href="#" class="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p class="text-center mt-4 text-sm">
          Do not have an account?
          <Link class="text-blue-600 hover:underline" to={"/singup"}>
            Sing Up
          </Link>
        </p>
      </div>
    </div>
  );
}
