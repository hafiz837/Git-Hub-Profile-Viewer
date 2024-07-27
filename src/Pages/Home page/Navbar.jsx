import React from "react";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-[4rem] rounded-lg flex justify-around items-center shadow-lg">
      <a
        href="#"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Home
      </a>
      <a
        href="#"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Repos
      </a>
      <a
        href="#"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Followers
      </a>
      <a
        href="#"
        className="cursor-pointer bg-yellow-400 border-2 border-black px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Following
      </a>
    </div>
  );
}

export default Navbar;
