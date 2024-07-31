import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Following({ followingData }) {
  useEffect(() => {
    if (followingData.length === 0) {
      toast.warn("User does not have any following.");
    }
  }, [followingData]);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <ToastContainer />
      {followingData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {followingData.map((singleData) => (
            <div
              key={singleData.id}
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-black border border-gray-200 rounded-lg shadow  p-6 flex flex-col items-center"
            >
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={singleData.avatar_url}
                alt={singleData.login}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                {singleData.login}
              </h5>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white text-4xl ">User does not have any following.</p>
      )}
    </div>
  );
}

export default Following;
