import React from "react";
import Router from "./routers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />;
      <ToastContainer />
    </>
  );
}

export default App;
