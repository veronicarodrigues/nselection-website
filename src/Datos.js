import React, { useState } from "react";
import "./Datos.css";
import datosImg from "./media/datos-img.jpg";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Tus datos se han enviado correctamente. Te contactaré pronto. </p>;
};

const Datos = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0x05q6g",
        "template_8hhcedv",
        e.target,
        "QpWSrvbIkzNhtddbX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 30000);

  return (
    <div className="container datos">
      <div className="row datos-foto">
        <form className="col-8" onSubmit={sendEmail}>
          <h3>Déjenos sus datos</h3>
          <h4>Le contactaremos</h4>
          <div className="form-row campos">
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
              ></input>
            </div>
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
                name="surname"
              ></input>
            </div>
          </div>
          <div className="form-row campos">
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
              ></input>
            </div>
            <div className="col-5 campo">
              <input
                type="text"
                className="form-control"
                placeholder="Teléfono"
                name="phone"
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
          <div className="form-row sent-data-message">
            <div className="sent-data">{result ? <Result /> : null}</div>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p className="form-check-p" for="flexCheckDefault">
              Acepto la{" "}
              <a href="https://terminosya.com/generador-politica-de-privacidad?gclid=CjwKCAjw5remBhBiEiwAxL2M97iKbwK9Lo4Wg4akNHm7HIzQ7sjeVDdm9FiNhnpE_8nJucafHhPlyBoCmMMQAvD_BwE">
                política de privacidad
              </a>{" "}
              de NSelection Real Estate y permito que la empresa me contacte por
              email/teléfono con motivos informativos.
            </p>
          </div>
        </form>
        <div className="col-4">
          <img src={datosImg} alt="presentation" className="datosImg" />
          <div id="contacto"></div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
