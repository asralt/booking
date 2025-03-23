import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("I am supposed to be doing something");
    setSearchQuery(e.target.value);
  };

  return (
    <div className="navbar bg-[#CABAC8] shadow-sm px-4 py-2">
      {/* Left icon */}
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Optional: Add logo or title here */}
      <div className="flex-1">
        <span className="text-xl font-bold text-gray-900">Booking App</span>
      </div>

      {/* Right-aligned login button */}
      <div className="flex-none">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
