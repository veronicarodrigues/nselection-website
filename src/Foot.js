import React from "react";
import "./Foot.css";
import homeLogo from "./media/home-logo.png";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <div className="foot-container">
      <div className="row">
        <div className="col-5">
          <img src={homeLogo} alt="home-logo" className="home-logo" />
          <p className="moto">
            Nuestro compromiso es <br />
            su casa
          </p>
        </div>
        <div className="col-3 datos-inmo">
          <ul>
            <li className="heading">
              <a href="#">Inicio</a>
            </li>
            <li className="section">
              <a href="#presentación">Quiénes somos</a>
            </li>
            <li className="section">
              <a href="#ofrecer">Déjenos sus datos</a>
            </li>
            <li className="section">
              <a href="#contacto">Contáctenos</a>
            </li>
          </ul>
        </div>
        <div className="col-3 legal-inmo">
          <ul>
            <li className="heading">
              <a href="#">Información inmobiliaria</a>
            </li>
            <li className="section">
              <a href="#">Documento de la contravenda</a>
            </li>
            <li className="section">
              <a href="#">Impuesto de la contravenda</a>
            </li>
            <li className="section">
              <a href="#">Gastos de la contravenda</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Foot;
