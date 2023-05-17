import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-slate-300">
      <h1 className="text-red-600 text-6xl">404</h1>
      <p className="text-red-600 text-2xl">Page Not Found!</p>
      <Link
        className="my-2 text-white btn bg-blue-500 px-2 py-1 rounded-md "
        to="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default PageNotFound;
