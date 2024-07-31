import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-[4rem] rounded-lg flex justify-around items-center shadow-lg">
      <Link
        to="/"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Home
      </Link>
      <Link
        to="/repos"
        className="cursor-pointer w-auto bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Repos
      </Link>
      <Link
        to="/followers"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Followers
      </Link>
      <Link
        to="/following"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Following
      </Link>
    </div>
  );
}

export default Navbar;
