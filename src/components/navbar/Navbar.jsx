import { useState } from "react";
import "./navbar.css";
import { FaGripfire, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

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
            to="/contact"
            className={({ isActive }) =>
              isActive ? "activeBtn" : "inactiveBtn"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* MOBILE NAV MENU */}

      <div className="mobile-nav">
        <div className="mobile-logo">
          <FaGripfire size={23} className="mobile-logo-icon" />
          <h4>
            Kel<span className="span-two">Splore</span>
          </h4>
        </div>
        
          {showNavbar ? (
            <FaTimes
              className="icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          ) : (
            <FaBars
              className="icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          )}
      </div>

      <ul className={showNavbar ? "hidden-nav active" : "hidden-nav"}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeBtn" : "inactiveBtn")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "activeBtn" : "inactiveBtn")}
        >
          <li>Movies</li>
        </NavLink>

        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "activeBtn" : "inactiveBtn")}
        >
          <li>Books</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeBtn" : "inactiveBtn")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
