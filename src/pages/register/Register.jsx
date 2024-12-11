import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../redux/slices/user-slice";
import { toast, Bounce } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const initialState = {
  name: "",
  username: "",
  password: "",
};

const Register = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const paramsId = useLocation().search.split("=")[1];

  useEffect(() => {
    if (paramsId) {
      const updateUser = user.find((item) => item.id == paramsId);
      if (updateUser) {
        setData(updateUser);
      }
    }
  }, [paramsId, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paramsId) {
      const existUser = user.find((item) => item.username === data.username && item.id !== data.id);
      if (existUser) {
        return toast.error("🦄 This user already exists!", {
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
      dispatch(editUser({ ...data, id: paramsId }));
    } else {
      if (user.find((item) => item.username === data.username)) {
        return toast.error("🦄 This user already exists!", {
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
      dispatch(addUser({ ...data, id: new Date().getTime() }));
    }

    setData(initialState);
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          {paramsId ? "Update Register" : "Register"}
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Full Name
          </label>
          <input
            required
            id="name"
            name="name"
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your full name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-1">
            Username
          </label>
          <input
            required
            id="username"
            name="username"
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your username"
            value={data.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            required
            id="password"
            name="password"
            className="w-full border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {paramsId ? "Update" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
