import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          Welcome to Our Platform!
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Discover an intuitive and easy-to-use platform designed to simplify
          your daily tasks. Whether you want to connect, learn, or grow, we have
          everything you need.
        </p>

        <p className="text-gray-600 mb-8">
          Join us today and explore a world of possibilities. Sign up or log in
          to get started!
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
