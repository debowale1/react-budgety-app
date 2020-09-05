import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <header className="header">
        <h2>Budgety App</h2>

        <nav className="user-nav">
          <div className="user-nav__user">
            <ul className="user-nav__user-list">
              <li className="user-nav__user-item">
                <Link to="/" className="user-nav__user-link">
                  Home
                </Link>
              </li>
              <li className="user-nav__user-item">
                <Link to="/about" className="user-nav__user-link">
                  About
                </Link>
              </li>
            </ul>

            {/* <span className="user-nav__user-name">User</span> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
