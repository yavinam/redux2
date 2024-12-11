import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
        <h2 className="text-4xl font-bold mt-4 drop-shadow-lg">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
