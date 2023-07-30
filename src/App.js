import React from "react";
import Navbar from "./Navbar.js";
import NSelection from "./NSelection.js";
import Presentation from "./Presentation.js";
import Datos from "./Datos.js";
import Contacto from "./Contacto.js";
import Foot from "./Foot.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <NSelection />
        <Presentation />
        <Datos />
        <Contacto />
        <Foot />
      </div>
    </div>
  );
}
