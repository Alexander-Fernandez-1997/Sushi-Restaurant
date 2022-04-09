import React from "react";
import "./../index.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bg fixed-top shadow ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sushi Bar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className=" navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/menu"
              >
                Menu
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/gallery"
              >
                Gallery
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/about"
              >
                About us
              </NavLink>
              {/* <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/login"
            >
              Admin
            </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
