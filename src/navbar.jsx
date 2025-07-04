import { FaBarsStaggered } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex justify-between justify-items-center w-4/5 m-auto py-5 text-white">
      <div className="flex gap-2">
        <FaCode className="mt-1 text-2xl text-blue-700 animate-spin transition-all" />
        <h3 className="text-2xl font-semibold"> JB Developer</h3>
      </div>
      <div className="flex items-center text-center">
        <ul
          className=" sm:flex w-96 justify-between hidden "
        >
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
        <FaBarsStaggered className="sm:hidden text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
