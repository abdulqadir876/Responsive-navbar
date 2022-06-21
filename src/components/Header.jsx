import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };
  return (
    <div className="bg-gray-800 text-white">
      <div
        className="container bg-black mx-auto flex justify-between items-center h-16 fixed left-0 top-0 right-0 z-10 "
        style={{ zIndex: "10" }}
      >
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-400 ">
            <span className="">B</span>lack History
          </h1>
        </div>
        {/* Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-lg">
            <li>
              <Link
                to="page1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="hover:text-yellow-400"
              >
                Page 1
              </Link>
            </li>
            <li>
              <Link
                to="page2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="hover:text-yellow-400"
              >
                Page 2
              </Link>
            </li>
            <li>
              <Link
                to="page3"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="hover:text-yellow-400"
              >
                Page 3
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer hover:text-yellow-400"
        >
          <FiMenu size={30} />
        </div>
      </div>
      {/* Mobile */}
      <nav className="md:hidden block absolute t-0">
        <ul
          className={
            nav
              ? " fixed flex flex-col gap-4 left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-2xl font-bold m-4 hover:text-yellow-400">
            <span className="">B</span>lack History
          </h1>
          <li>
            <Link
              to="page1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="hover:text-yellow-400 ml-10"
              onClick={()=>setNav(false)}
            >
              Page 1
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>setNav(false)}
              to="page2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="hover:text-yellow-400 ml-10"
            >
              Page 2
            </Link>
          </li>
          <li>
            <Link
              to="page3"
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
              className="hover:text-yellow-400 ml-10"
            >
              Page 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
