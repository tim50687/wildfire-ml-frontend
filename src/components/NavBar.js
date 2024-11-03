import React from "react";

const Navbar = ({ onOpenAbout, onOpenDevLog }) => {
  return (
    <nav className="w-full bg-white bg-opacity-75 flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">Wildfire Risk Map</h1>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onOpenAbout}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          About This Project
        </button>
        <button
          onClick={onOpenDevLog}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Dev Log
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
