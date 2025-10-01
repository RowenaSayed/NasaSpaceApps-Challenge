import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className=" flex items-center justify-center bg-[#0d1117] py-5 px-4">
      <section className="w-full max-w-md bg-[#161b22]/80 border border-[#00B8D9]/30 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create an Account
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-[#0d1117] border border-[#00B8D9]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#0d1117] border border-[#00B8D9]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-[#0d1117] border border-[#00B8D9]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#00B8D9] py-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00B8D9] hover:underline">
            Log In
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;
