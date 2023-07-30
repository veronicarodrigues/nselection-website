import React from "react";
import "./Presentation.css";
import presentationImg from "./media/presentation-img.jpg";

const Presentation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 col">
          <h3 className="nSelection-h3">
            NSelection <br />
            Quiénes somos
          </h3>
          <p>
            ¡Nuestra misión es su casa! Sabemos que no es fácil comprar una
            nueva propiedad o vender su vivienda, y estamos convencidos de que
            una gestión exitosa se debe basar en la personalización, en los
            conocimientos sólidos y en el empleo de la tecnología adecuada. Por
            eso, en Evernest la experiencia personalizada y el análisis de datos
            van de la mano. Nuestros consultores inmobiliarios están a su
            disposición 24/7, con asesorías individualizadas para todo el
            proceso de compra o venta. Conozca aquí a nuestra red de consultores
            inmobiliarios en España.
          </p>
        </div>
        <div className="col-5 col">
          <img
            src={presentationImg}
            alt="presentation-image"
            className="presentationImg"
          />
          <div id="ofrecer"></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
