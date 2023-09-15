import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <div className="flex items-center justify-between p-4 z-[100] w-full absolute ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          Netflix
        </h1>
      </Link>

      <Link to='/login'>
      <div>
        <button className="pr-4 text-white">Sign in</button>
      </div>
        </Link>

      <Link to='/signup'>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
          Sign Up
        </button>
      </Link>
      </div>
  );

};

export default Navbar;
