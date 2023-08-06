import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentUrl = window.location.href;
  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand nselection" href="#" title="Homepage">
          NSelection Real Estate ®
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href={currentUrl}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#presentación">
                Quiénes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={currentUrl}>
                Información inmobiliaria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ofrecer">
                Ofrecer propiedad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
