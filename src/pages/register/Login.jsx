import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { addToken } from "../../redux/slices/token-slice";
const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [data, setData] = useState(initialState);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const existUser = user.find((item) => item.username === data.username);
    if (existUser) {
      if (existUser.password === data.password) {
        dispatch(addToken("Ha payload bor"));
        return navigate("/admin");
      } else {
        return toast.error("🦄 Username or password incorrect!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      return toast.error("🦄 Username or password incorrect!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Enter your username"
            value={data.username}
            onChange={handleChange}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
