import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white m-0">My Website</h1>
        <button className="bg-transparent text-white border-none cursor-pointer text-lg">Login</button>
      </div>
    </header>
  );
};

export default Header;
