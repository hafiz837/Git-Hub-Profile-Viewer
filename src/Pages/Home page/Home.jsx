import React from "react";
import UserCard from "../UserCard";
import SearchBar from "./SearchBar";


function Home({ handleUsernameChange, userData }) {
  const handleSearch = (searchValue) => {
    handleUsernameChange(searchValue);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} />
      {userData && <UserCard user={userData} />}
    
    </div>
  );
}

export default Home;
