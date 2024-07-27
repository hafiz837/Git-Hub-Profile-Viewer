import React, { useState } from 'react';

function SearchBar({onSearch}) {
    const [userName,setUserName]=useState("");
    const handleSearch=(event)=>{
        setUserName(event.target.value);
    }
    const handleSearchClick=()=>{
      onSearch(userName)
    }
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Enter username"
        className="border-2 border-black p-2 rounded-md flex-grow mr-2"
        onChange={handleSearch}
      />
      <button  onClick={handleSearchClick} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
