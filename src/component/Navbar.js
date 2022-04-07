import React from "react";
import sun from "../images/sun.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  d-flex opacity:0.5 p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" bg="secondary">
          Nancy Wang
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto fs-6">
            <a
              className="nav-link active text-xl me-4 "
              aria-current="page"
              href="#skills"
            >
              Skills
            </a>

            <a className="nav-link active text-xl me-4" href="#projects">
              Projects
            </a>

            <a className="nav-link active text-xl me-4" href="#about">
              About
            </a>

            <a className="nav-link active text-xl me-4 " href="#contact">
              Contact
            </a>

            <img
              src={sun}
              alt=""
              width="25px"
              height="25px"
              id="weather-logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
