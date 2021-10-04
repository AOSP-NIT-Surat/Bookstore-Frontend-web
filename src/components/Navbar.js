import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          <h2>Bookstore Frontend</h2>
        </Link>
        <button
          className="navbar-toggler me-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-5 ms-5" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item my-2 me-2">
              <Link
                to="/register"
                className="btn btn-outline-light"
                style={{ borderRadius: "5px" }}
              >
                Register
              </Link>
            </li>
            <li className="nav-item my-2 me-2">
              <Link
                to="/login"
                className="btn btn-outline-light"
                style={{ borderRadius: "5px" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
