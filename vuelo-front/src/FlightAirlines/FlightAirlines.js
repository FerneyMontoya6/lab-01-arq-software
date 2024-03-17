import React, { useState } from "react";
import axios from "axios";

function Airlines() {
  const [selectedAirline, setSelectedAirline] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/flights/searchbyairline?airline=${selectedAirline}`
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
        <label>Aerolínea:</label>
        <select
          value={selectedAirline}
          onChange={(e) => setSelectedAirline(e.target.value)}
        >
          <option value="">Seleccione una aerolínea</option>
          <option value="Airways Inc.">Airways Inc.</option>
          <option value="JetFly">JetFly</option>
          <option value="Avianca">Avianca</option>
          <option value="Latam">Latam</option>
          <option value="Wingo">Wingo</option>
        </select>
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

export { Airlines };















// import React, { useLayoutEffect, useState } from "react";
// import axios from "axios";

// function Airlines() {
//     const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);

//     try {
//       const response = await axios.get(
//         `http://localhost:8080/flights/searchbydate?startDate=${startDate}&endDate=${endDate}`
//       );

//       setFlights(response.data);
//     } catch (error) {
//       console.log("Error en la carga de datos de vuelo" + error);
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <h2>Buscar vuelos</h2>
//       <div>
//         <label>Fecha de inicio:</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         ></input>
//       </div>
//       <button onClick={handleSearch}>Buscar</button>

//       {loading && <p>Cargando...</p>}

//       <h2>Resultados de la búsqueda:</h2>
//       {flights.length > 0 ? (
//         <ul>
//           {flights.map((flight, index) => (
//             <li key={index}>
//               {Object.keys(flight).map((key) => (
//                 <div key={key}>
//                   {`${key}: ${
//                     typeof flight[key] === "object"
//                       ? JSON.stringify(flight[key])
//                       : flight[key]
//                   }`}
//                 </div>
//               ))}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron vuelos</p>
//       )}
//     </>
//   );
// }

// export { Airlines };