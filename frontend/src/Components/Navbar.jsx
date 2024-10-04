import { useState } from "react";
import { UserIcon, LogoutIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Simulate logged-in user
  const user = {
    loggedIn: false,  // Set this to true if user is logged in
    name: 'Neetu Rai',  // User's name for display in the dropdown
  };

  return (
    <>
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold">
            Job <span className="text-red-500">Portal</span>
          </h1>
        </div>
        <div className="flex font-medium items-center gap-5">
          <ol>Home</ol>
          <ol>Jobs</ol>
          <ol>Browse</ol>
        </div>
        {!user.loggedIn ? (
          <div>
            <Link to="/login">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Sign up
              </button>
            </Link>
          </div>
        ) : (
          <div className="relative">
            <div className="avatar cursor-pointer" onClick={toggleDropdown}>
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-7">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Profile"
                />
              </div>
            </div>

            {/* Dropdown */}
            {dropdownVisible && (
              <ul className="menu dropdown-content bg-base-100 rounded-box absolute right-0 mt-2 w-52 p-2 shadow z-10">
                <h1 className="font-bold pl-[2vh] text-xl">{user.name}</h1>
                <li>
                  <a href="profile" className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-gray-500" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="logout" className="flex items-center gap-2">
                    <LogoutIcon className="h-5 w-5 text-gray-500" />
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}
