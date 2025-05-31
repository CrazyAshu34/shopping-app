import React, { useEffect, useState } from "react";
import purebeauty from "../assets/purebeauty.svg";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location)
  // const [navColor, setNavColor] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     window.addEventListener("scroll", (event) => {
  //       const scrollPosition = window.scrollY;
  //       // console.log(scrollPosition);
  //       if (scrollPosition >= 80) {
  //         setNavColor(true);
  //       } else {
  //         setNavColor(false);
  //       }
  //     });
  //   }
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navigation = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About Us" },
    { path: "/product", text: "Shop" },
    { path: "/demo", text: "Page" },
    { path: "/contact", text: "Contact Us" },
  ];

  return (
    // <nav
    //   className={`fixed top-0 left-0 z-50 w-full ${navColor ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent text-white"} text-white shadow`}
    // >
    <nav
      // className={`z-50 w-full bg-[url('HomeImg/background_gradient.png')] `}
      className={`absolute top-0 left-0 z-50 w-full`}
    >
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-0">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img className="h-full w-[40%]" src={purebeauty} alt="icon" />
            </NavLink>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                className="text-black-500 hover:text-black-600 focus:text-black-600 focus:outline-none dark:text-black dark:hover:text-black dark:focus:text-black"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile and desktop both Menu" */}
          {/* cursor pointer none */}
          <div
            className={`pointer-events-auto absolute inset-x-0 z-20 mt-[1rem] h-lvh w-full bg-[#F38E8C] px-6 py-4 transition-all duration-300 ease-in-out md:mt-auto md:h-auto md:bg-transparent lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "pointer-events -translate-x-full opacity-0"
            }`}
          >
            <div className="-mx-6 flex flex-col lg:mx-8 lg:flex-row lg:items-center">
              {navigation.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={`mx-3 mt-2 transform rounded-md px-3 py-2 transition-colors duration-300 hover:!text-white lg:mt-0 ${location.pathname === item.path ? "text-white" : "text-[#1c0b0c]"}`}
                >
                  {item.text}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 flex items-center lg:mt-0">
              <button
                className="mx-4 hidden transform text-gray-600 transition-colors duration-300 hover:text-gray-700 focus:text-gray-700 focus:outline-none lg:block dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                aria-label="show notifications"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-gray-400">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="h-full w-full object-cover"
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-gray-700 lg:hidden dark:text-gray-200">
                  Ashutosh Singh
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
