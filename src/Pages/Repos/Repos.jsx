import React from "react";

function Repos({ reposData }) {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-blue-400 rounded-lg shadow-md p-6">
        {reposData.length > 0 ? (
          <ul className="list-disc pl-5 space-y-4">
            {reposData.map((repo) => (
              <li key={repo.id} className="bg-purple-100 p-4 rounded-md shadow-sm hover:bg-purple-200 cursor-pointer transition duration-300">
                <span className="text-lg font-semibold">{repo.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No repositories found.</p>
        )}
      </div>
    </div>
  );
}

export default Repos;
