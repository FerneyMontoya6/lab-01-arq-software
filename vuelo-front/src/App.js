import React, { useState } from "react";
import { FlightDate } from "./FlightDate/FlightDate.js";
import { Airlines } from "./FlightAirlines/FlightAirlines.js";
import { FlightPrice } from "./FlightPrice/FlightPrice.js";
import { FlightRoute } from "./FlightRoute/FlightRoute.js";

import "./App.css";

function App() {
  const [form, setForm] = useState(null);

  const handleButtonClick = (index) => {
    setForm(index);
  };

  const renderForm = () => {
    switch (form) {
      case 0:
        return <FlightDate />;
      case 1:
        return <Airlines />;
      case 2:
        return <FlightPrice />;
      case 3:
        return <FlightRoute />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Buscador de vuelos por:</h1>
      <div className="btns-container">
        <button onClick={() => handleButtonClick(0)}>Fecha</button>
        <button onClick={() => handleButtonClick(1)}>Aerolínea</button>
        <button onClick={() => handleButtonClick(2)}>Precio</button>
        <button onClick={() => handleButtonClick(3)}>Ruta</button>
      </div>
      <div className="form-selected">
        {renderForm()}
      </div>
    </>
  );

}

export default App;
