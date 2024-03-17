import React, { useState } from "react";
import { FlightDate } from "./FlightDate/FlightDate.js";
import { Airlines } from "./FlightAirlines/FlightAirlines.js";
import { FlightPrice } from "./FlightPrice/FlightPrice.js";
import { FlightRoute } from "./FlightRoute/FlightRoute.js";

import "./App.css";

const App = () => {
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
    <div className="flight-booking">
      <h1>Buscador de vuelos por:</h1>
      <div className="flight-options">
      <button className="btn" onClick={() => handleButtonClick(0)}>Fecha</button>
      <button className="btn" onClick={() => handleButtonClick(1)}>Aerolínea</button>
      <button className="btn" onClick={() => handleButtonClick(2)}>Precio</button>
      <button className="btn" onClick={() => handleButtonClick(3)}>Ruta</button>
      </div>


      <div className="form-selected">
        {renderForm()}
      </div>
    </div>
  );
}

export default App;
