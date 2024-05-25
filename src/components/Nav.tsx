// components/Nav.tsx
import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Movie Galleries</div>
        <div className="flex justify-center items-center flex-1 mx-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search..."
            />
            <button className="absolute top-0 right-0 px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;