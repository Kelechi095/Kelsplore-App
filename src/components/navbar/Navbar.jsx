import "./navbar.css";
import { FaGripfire } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsEnvelope, BsBook } from "react-icons/bs";
import { MdOutlineMovieCreation } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <FaGripfire size={23} className="logo-icon" />
        <h4 className="desktop-logo">
          Kel<span>Splore</span>
        </h4>
      </div>
      <ul className="desktop-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            Books
          </NavLink>
        </li>
        <li className="connect">
          <NavLink
            to="/message"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            Connect with me
          </NavLink>
        </li>
      </ul>

      {/* MOBILE NAV MENU */}

      <ul className="mobile-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            <AiOutlineHome className="icon" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            <MdOutlineMovieCreation className="icon" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            <BsBook className="icon" />
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/message"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            <BsEnvelope className="icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
