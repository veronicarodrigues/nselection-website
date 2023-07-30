import React from "react";
import "./Datos.css";
import datosImg from "./media/datos-img.jpg";

const Datos = () => {
  return (
    <div className="container datos">
      <div className="row datos-foto">
        <form className="col-8">
          <h3>Déjenos sus datos</h3>
          <h4>Le contactaremos</h4>
          <div className="form-row campos">
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              ></input>
            </div>
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
              ></input>
            </div>
          </div>
          <div className="form-row campos">
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
              ></input>
            </div>
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Teléfono"
              ></input>
            </div>
          </div>
          <div className="form-row button">
            <input
              className="btn btn-light send"
              type="submit"
              value="Enviar"
            ></input>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p className="form-check-p" for="flexCheckDefault">
              Acepto la <a href="#">política de privacidad</a> de NSelection
              Real Estate y permito que la empresa me contacte por
              email/teléfono con motivos informativos.
            </p>
          </div>
        </form>
        <div className="col-4">
          <img src={datosImg} alt="presentation-image" className="datosImg" />{" "}
          <div id="contacto"></div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
