import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3 d-flex p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo192.png" width={70} />
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
          <div className="navbar-nav ms-auto fs-5">
            <a
              className="nav-link active text-xl me-5"
              aria-current="page"
              href="#"
            >
              Skills
            </a>

            <a className="nav-link active text-xl me-5" href="#projects">
              Projects
            </a>

            <a className="nav-link active text-xl me-5" href="#about">
              About
            </a>

            <a className="nav-link active text-xl " href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
