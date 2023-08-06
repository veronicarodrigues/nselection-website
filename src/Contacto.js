import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="container contacto">
      <h3>Contacto</h3>
      <h4>O si lo prefiere, contacte con nosotros</h4>
      <ul className="contacto">
        <li className="phone">
          <a href="tel:+34606981333">
            <img
              src="https://img.icons8.com/ios-glyphs/30/iphone.png"
              alt="iphone"
              className="phone-icon"
            />
            +34 606 981 333
          </a>
        </li>
        <li className="email">
          <a href="mailto:natalia.ardanaz@gmail.com">
            <img
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
              className="email-icon"
            />
            natalia.ardanaz@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
