import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import ScrollNav from "./ScrollNav";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
 
  
  return (
    <nav className="dark:bg-gray-800  h-auto z-40 fixed top-0 left-0 w-full  bg-white shadow-sm-light dark:shadow-none">
      <div className="px-4 md:px-14   lg:px-16 xl:px-12 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="text-white space-x-3 flex items-center xl:space-x-6">
          <NavLink to='/'>
            <img
              
              className="h-8 w-auto cursor-pointer"
              src="sportlogo.svg"
              alt="Logo"
            />
            </NavLink>
            <form>
              <button
                className="w-28 xl:w-24 px-0 font-semibold text-xs BtnEx1 z-10"
                style={{ height: "31px" }}
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Navigation */}
            <NavLink
              to="/footballhome"
              className="hidden dark:hover:text-white hover:text-black xl:block xl:font-semibold xl:text-gray-600 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Home
            </NavLink>
            <Link
              to="/LeagueHome"
              className="hidden dark:hover:text-white hover:text-black xl:block xl:font-semibold xl:text-gray-600 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Matches
            </Link>

            <NavLink
              to="/"
              className="hidden dark:hover:text-white hover:text-black xl:block xl:font-semibold xl:text-gray-600 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Players
            </NavLink>
            <NavLink
              to="/"
              className="hidden dark:hover:text-white hover:text-black xl:block xl:font-semibold xl:text-gray-600 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Play  Games
            </NavLink>
            <span className="hidden dark:hover:text-white hover:text-black xl:block xl:font-semibold xl:text-gray-600 xl:dark:text-gray-300 xl:text-[1.1rem]">
              <div className="paste-button">
                <button className="button45 font-semibold  text-[1.1rem]">
                  More{" "}
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[20px] stroke-white stroke-[1px] animate-paste-arrow opacity-70 dark:text-white rounded-full bg-slate-700 "
                      aria-hidden="true"
                    >
                      <path
                        d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
                <div className="dropdown-content">
                  <Link id="top" to="/">
                    AI Match Predictor
                  </Link>
                  <Link id="middle" to="/">
                    Contact Us
                    {/* call image */}
                  </Link>
                  <Link id="bottom" to="/">
                    Help Center
                  </Link>
                  <Link id="bottom" to="/stat">
                    Statistics
                  </Link>
                </div>
              </div>
            </span>
          </div>

          {/* Search bar */}
          <div className="hidden flex-1 xl:flex justify-center xl:justify-end">
            <div className="relative z-0 ">
              <input
                type="text"
                placeholder="Search... Here!!"
                className="bg-white dark:bg-gray-700 dark:text-white text-gray-800 rounded-full pl-12 w-80 pr-14 py-1 focus:outline-none dark:focus:bg-gray-900 focus:bg-gray-200"
              />
              <button className="absolute px-1 left-2 top-0 mt-[0.4rem] mr-2 ">
                <svg
                  className="size-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="absolute hover:rounded-full hover:bg-slate-300 size-7 items-center flex justify-center right-2 top-0 mt-1 mr-1  ">
                <svg
                  className="h-5 w-5 text-gray-400 hover:text-gray-700 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 19"
                >
                  <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                  <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                </svg>
              </button>
            </div>
          </div>
          

          {/* Mobile Search button */}
          <div className="flex xl:items-center xl:ml-4">
            <button
              className="hover:rounded-full mx-4 my-0 size-8 hover:border hover:border-gray-700 hover:focus:ring-slate-900 hover:focus:ring-4 items-center flex justify-center xl:hidden  hover:bg-opacity-5 "
              title="Search"
              onClick={toggleSearch}
            >
              <svg
                className="size-6 dark:text-white  text-slate-900 xl:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            {isSearchOpen && (
              <div
                className="xl:hidden z-[-1] absolute w-full top-32 left-0 pb-4 pt-8  bg-white dark:bg-gray-800 px-2"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search... Here!!"
                    className="dark:bg-gray-700 bg-slate-300 w-full text-gray-700 dark:text-white rounded-full pl-12 pr-14 py-1 focus:outline-none dark:focus:bg-gray-900 focus:bg-gray-200"
                  />
                  <button className="absolute px-1 left-2 top-0 mt-[0.4rem] mr-2 ">
                    <svg
                      className="size-5 dark:text-gray-400 text-slate-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                  <button className="absolute hover:rounded-full dark:hover:bg-slate-300 hover:bg-slate-800  size-8  items-center flex justify-center right-2 top-0 mt-0 mr-1  ">
                    <svg
                      className="h-5 w-5 dark:text-gray-400 text-slate-900 hover:text-gray-400 dark:hover:text-gray-700  "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 19"
                    >
                      <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                      <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                    </svg>
                  </button>
                </div>
                {/* <hr className="dark:hidden mt-5 w-full"/> */}
              </div>
            )}
            {/* User profile */}
            <button
              className="hover:rounded-full size-8 hover:border hover:border-gray-700 hover:focus:ring-slate-900 hover:focus:ring-4 items-center flex justify-center hover:bg-slate-200 hover:bg-opacity-5"
              title="Search"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/30"
                alt="User"
              />
            </button>
          </div>
        </div>
      </div>
      <ScrollNav/>





      {/* Mobile navbar */}

      <div className="xl:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 m-auto font-medium md:flex md:justify-center">
        <NavLink
          to="/footballhome"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 md:px-14 lg:px-16   group ${
              isActive ? 'text-red-600 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`
          }
        >
          <svg
            className="size-4 mb-1 group-hover:text-red-600 dark:group-hover:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-xs group-hover:text-red-600 dark:group-hover:text-red-500">Home</span>
        </NavLink>

        <NavLink
          to="/LeagueHome"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 md:px-14 lg:px-16   group ${
              isActive ? 'text-red-600 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`
          }
        >
          <svg
            className="size-5 mb-1 group-hover:text-red-600 dark:group-hover:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs group-hover:text-red-600 dark:group-hover:text-red-500">Matches</span>
        </NavLink>

        <span className="inline-flex flex-col items-center justify-center px-5 md:px-14 lg:px-16 group-hover:text-red-600 dark:group-hover:text-red-500 group pt-2">
          <NavDrawer />
        </span>

        <NavLink
          to="/players"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 md:px-14 lg:px-16   group ${
              isActive ? 'text-red-600 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`
          }
        >
          <svg
            viewBox="0 0 512 512"
            className="size-5 mb-1 group-hover:text-red-600 dark:group-hover:text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" />
          </svg>
          <span className="text-xs group-hover:text-red-600 dark:group-hover:text-red-500">Players</span>
        </NavLink>

        <NavLink
          to="/games"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 md:px-14 lg:px-16   group ${
              isActive ? 'text-red-600 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`
          }
        >
          <svg
            className="size-6 mb-0 group-hover:text-red-600 dark:group-hover:text-red-500"
            viewBox="0 0 512 512"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M377.8,100.1C332.9,86.8,318.8,112,256,112s-76.9-25.3-121.8-11.9c-44.9,13.3-67.3,60.4-88.5,148.8  c-21.2,88.5-17.3,152.4,7.7,164.3c25,11.9,53.2-15.7,87.5-40.3c34.3-24.7,46.2-39.9,115.2-39.9s80.9,15.2,115.2,39.9  c34.3,24.7,62.5,52.2,87.5,40.3c25-11.9,28.9-75.8,7.7-164.3C445.1,160.5,422.7,113.4,377.8,100.1z M256,307.1  c-25.6,0-46.4-20.8-46.4-46.4s20.8-46.4,46.4-46.4s46.4,20.8,46.4,46.4S281.6,307.1,256,307.1z"
            />
          </svg>
          <span className="text-xs group-hover:text-red-600 dark:group-hover:text-red-500">Games</span>
        </NavLink>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
