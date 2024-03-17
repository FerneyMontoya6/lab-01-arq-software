import React, { useState } from "react";
import axios from "axios";
import "./FlightRoute.css"

function FlightRoute() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/flights/searchbyroute?origin=${origin}&destination=${destination}`
      );

      setFlights(response.data);
    } catch (error) {
      console.log("Error en la carga de datos de vuelo" + error);
    }

    setLoading(false);
  };

  return (
    <>
      <h2>Buscar vuelos por ruta</h2>
      <div className= "OptionsContainer">
        <div>
            <label>Origen:</label>
            <input
            
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            />
        </div>
        <div>
            <label>Destino:</label>
            <input
            
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            />
        </div>
      </div>
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando...</p>}

      <h2>Resultados de la búsqueda:</h2>
      <div className="flight-cards">
        {flights.length > 0 ? (
          flights.map((flightGroup, groupIndex) => (
            <div key={groupIndex} className="flight-card-group">
              {flightGroup.map((flight, index) => (
                <div key={index} className="flight-card">
                  <p><strong>ID:</strong> {flight.id}</p>
                  <p><strong>Aerolínea:</strong> {flight.airline}</p>
                  <p><strong>Origen:</strong> {flight.origin}</p>
                  <p><strong>Destino:</strong> {flight.destination}</p>
                  <p><strong>Precio:</strong> {flight.price}</p>
                  <p><strong>Fecha de salida:</strong> {flight.departureDate}</p>
                  <p><strong>Fecha de llegada:</strong> {flight.arrivalDate}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No se encontraron vuelos</p>
        )}
      </div>
    </>
  );
}

export { FlightRoute };
