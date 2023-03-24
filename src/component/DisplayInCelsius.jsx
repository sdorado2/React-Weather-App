import React from "react";
import Celsius from "./Celsius";

const DisplayInCelsius = ({ weather }) => {
  return (
    <div className="spanTest">
      {weather.list.map((elem) => (
        <div className="testing">
          <h2>
            At : {elem.dt_txt} <hr /> Temp : <Celsius temp={elem.main.temp} />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DisplayInCelsius;
