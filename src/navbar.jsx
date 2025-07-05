import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { GoX } from "react-icons/go";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleshow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <nav className="flex justify-between justify-items-center sm:w-4/5 m-auto py-5 sm:shadow-none shadow-lg shadow-slate-500 text-white">
      <div className="flex gap-2 mx-2">
        <FaCode className="mt-1 text-2xl text-blue-700 animate-spin transition-all" />
        <h3 className="text-2xl font-semibold"> JB Designer</h3>
      </div>

      <FaBarsStaggered
        className="sm:hidden font-semibold mx-5 mt-2 text-2xl cursor-pointer"
        onClick={handleshow}
      />

      {show && (
        <div className="right-0 mx-2 items-center text-center fixed duration-300">
          <ul className=" relative w-52 space-y-4 h-72 sm:flex justify-between p-2 rounded-lg bg-slate-700 text-white">
            <GoX
              onClick={handleshow}
              className="text-4xl absolute right-0 font-medium mx-2"
            />
            <li>
              <a href="./home.jsx" className=" hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="./about.jsx" className=" hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="./project.jsx" className=" hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="./contact.jsx" className=" hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="sm:w-96 hidden sm:block w-40 right-0 mx-2 items-center text-center ">
        <ul className="sm:flex justify-between p-2 -top-4 rounded-lg ">
          <li>
            <a href="./home.jsx" className=" hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="./about.jsx" className=" hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="./project.jsx" className=" hover:underline">
              Project
            </a>
          </li>
          <li>
            <a href="./" className=" hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a href="./contact.jsx" className=" hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
