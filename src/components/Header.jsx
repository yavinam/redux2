import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="h-16 flex gap-8 text-lg font-semibold justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-500 transition duration-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-500 transition duration-200"
          }
        >
          Register
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-500 transition duration-200"
          }
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
