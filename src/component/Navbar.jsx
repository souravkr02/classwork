import React from "react";
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <li class="nav-item">
          <NavLink activeClassName="active nav-link"  to="/">Home</NavLink>
          </li>
          <li class="nav-item">
          <Link className="nav-link "to="/user">User</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link "to="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link "to="/table">API Example</Link>
          </li>            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
