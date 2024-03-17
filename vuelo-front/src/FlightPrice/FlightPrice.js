import React, { useState } from "react";
import axios from "axios";

function FlightPrice() {
  const [startPrice, setStartPrice] = useState("");
  const [endPrice, setEndPrice] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/flights/searchbyprice?startPrice=${startPrice}&endPrice=${endPrice}`
      );

      setFlights(response.data);
    } catch (error) {
      console.log("Error en la carga de datos de vuelo" + error);
    }

    setLoading(false);
  };

  return (
    <>
      <h2>Buscar vuelos por precio</h2>
      <div className="OptionsContainer">
      <div>
        <label>Precio mínimo:</label>
        <input
          type="number"
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Precio máximo:</label>
        <input
          type="number"
          value={endPrice}
          onChange={(e) => setEndPrice(e.target.value)}
        ></input>
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

export { FlightPrice };
