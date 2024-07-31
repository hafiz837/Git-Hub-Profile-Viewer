import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home page/Home";
import Navbar from "./Pages/Home page/Navbar";
import Repos from "./Pages/Repos/Repos";
import Following from "./Pages/Following/Following";
import Followers from "./Pages/Followers/Followers";
import Title from "./Pages/Home page/Title";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [reposData, setReposData] = useState([]);
 
  const token = "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";

  const fetchUserData = async (username) => {
    const profileURL = `https://api.github.com/users/${username}`;

    try {
      const [
        profileResponse,
        followersResponse,
        followingResponse,
        reposResponse,
      ] = await Promise.all([
        axios.get(profileURL, { headers: { Authorization: `token ${token}` } }),
        axios.get(`${profileURL}/followers`, {
          headers: { Authorization: `token ${token}` },
        }),
        axios.get(`${profileURL}/following`, {
          headers: { Authorization: `token ${token}` },
        }),
        axios.get(`${profileURL}/repos`, {
          headers: { Authorization: `token ${token}` },
        }),
      ]);

      setUserData(profileResponse.data);
      setFollowersData(followersResponse.data);
      setFollowingData(followingResponse.data);
      setReposData(reposResponse.data);

      //setting local storage data
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("followersData", JSON.stringify(followersData));
      localStorage.setItem("followingData", JSON.stringify(followersData));
      localStorage.setItem("reposData", JSON.stringify(reposData));
    } catch (err) {
      toast.error("Error fetching data or user does not exist.");
      console.log("Error fetching data:", err);
    }
  };

  const handleUsernameChange = (newUsername) => {
    // fetchUserData(newUsername);
    //getting local storage data
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const storedFollowersData = JSON.parse(
      localStorage.getItem("followersData")
    );
    const storedFollowingData = JSON.parse(
      localStorage.getItem("followingData")
    );
    const storedReposData = JSON.parse(localStorage.getItem("reposData"));

    if (storedUserData && storedUserData.login.toLowerCase() === newUsername.toLowerCase()) {
      setUserData(storedUserData);
      setFollowersData(storedFollowersData);
      setFollowingData(storedFollowingData);
      setReposData(storedReposData);
      console.log("Data fetched from the local storage");
    } else {
      fetchUserData(newUsername);
      console.log("Fetch Data from api");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
      <BrowserRouter>
        <Title />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleUsernameChange={handleUsernameChange}
                userData={userData}
              />
            }
          />
          <Route path="/repos" element={<Repos reposData={reposData} />} />
          <Route
            path="/followers"
            element={<Followers followersData={followersData} />}
          />
          <Route
            path="/following"
            element={<Following followingData={followingData} />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
