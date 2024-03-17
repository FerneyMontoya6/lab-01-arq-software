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
      <h2>Buscar vuelos</h2>
      <div>
        <label>Precio minimo:</label>
        <input
          type="Price"
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Precio maximo:</label>
        <input
          type="Price"
          value={endPrice}
          onChange={(e) => setEndPrice(e.target.value)}
        ></input>
      </div>
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando...</p>}

      <h2>Resultados de la búsqueda:</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              {Object.keys(flight).map((key) => (
                <div key={key}>
                  {`${key}: ${
                    typeof flight[key] === "object"
                      ? JSON.stringify(flight[key])
                      : flight[key]
                  }`}
                </div>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron vuelos</p>
      )}
    </>
  );
}

export { FlightPrice };
