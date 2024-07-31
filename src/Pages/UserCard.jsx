import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Loader from "../loader/Loader";

function UserCard({ user }) {
  const [Loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      {Loading ? (
       <Loader/>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-sm bg-gradient-to-r from-gray-800 via-gray-700 to-black border border-gray-700 rounded-lg shadow p-6">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={user.avatar_url}
                alt="Profile"
              />
              <h5 className="mb-1 text-xl font-medium text-white">
                {user.name}
              </h5>
              <span className="text-sm text-gray-400">@{user.username}</span>
              <p className="mt-2 text-sm text-gray-400 text-center">
                {user.bio}
              </p>
              <div className="flex mt-4">
                <div className="mr-4 text-center">
                  <span className="block text-lg font-medium text-white">
                    {user.followers}
                  </span>
                  <span className="text-sm text-gray-400">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-medium text-white">
                    {user.following}
                  </span>
                  <span className="text-sm text-gray-400">Following</span>
                </div>
              </div>
              <div className="flex mt-6 space-x-4">
                <Link
                  to="/repos"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out"
                >
                  Repos
                </Link>
                <Link
                  to="/followers"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out"
                >
                  Followers
                </Link>
                <Link
                  to="/following"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out"
                >
                  Following
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
