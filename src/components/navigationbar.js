import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to="/"
            >
              Sabrina Kitaka
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border 
              border-solid border-transparent rounded bg-transparent block lg:hidden outline-none
               focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              MENU
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase 
                  font-bold leading-snug text-black hover:opacity-75"
                  to="/about"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2 text-lg">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black 
                  hover:opacity-75"
                  to="/projects"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-lg">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold 
                  leading-snug text-black hover:opacity-75"
                  to="/contact-me"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2 text-lg">Contact me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}