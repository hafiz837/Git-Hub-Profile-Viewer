import React, { useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

function Home() {
  let token="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";
   const[username,setUserName]=useState("john")
  let newdata;
  const profileURL = `https://api.github.com/users/${username}`;
  const [newData, setNewData] = useState("hello");

  const fetchData = async () => {
    let data = await axios.get(profileURL, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    newdata = data.data;
    setNewData(newdata);
    console.log(newdata);
  }
  const user = {
    profilePicture: newData.avatar_url,
    name: newData.name,
    username: newData.login,
    bio: newData.bio,
    followers: newData.followers,
    following: newData.following,
  };

  const handleSearch=(searchValue)=>{
    setUserName(searchValue);
    fetchData(username);
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
      <h1 className="text-4xl font-bold pb-4 text-center text-white">GitHub Profile Viewer</h1>
      {/* <button onClick={()=>{  fetchData()}}>Click ME</button> */}
      <Navbar />
      <div className="container mx-auto px-4">
        <SearchBar  onSearch={handleSearch}/>
        {newData.login&&<UserCard user={user} />}
      </div>
    </div>
  );
}

export default Home;
