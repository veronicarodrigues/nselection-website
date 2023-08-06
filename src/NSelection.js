import React from "react";
import "./NSelection.css";
import homePageImg from "./media/home-page-img.png";

export default function NSelection() {
  return (
    <div className="NSelectionWeb">
      <main>
        <img src={homePageImg} alt="main-page" className="homePageImg" />
        <h1 className="heading-one">
          NSelection <br />
          Real Estate
        </h1>
        <h2 className="heading-two">
          Venda o alquile su <br />
          propiedad
        </h2>
        <h4 className="heading-three" id="presentación">
          Propiedades de lujo en Madrid
        </h4>
      </main>
    </div>
  );
}
