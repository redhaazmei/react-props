import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand font-weight-bold" href="/">
          Navbar
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
