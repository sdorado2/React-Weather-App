import React from "react";
import Celsius from "./Celsius";

const DisplayInCelsius = ({ weather }) => {
  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        <div className="hrForecast">
          <h2>
            At : {elem.dt_txt} <hr /> Temp : <Celsius temp={elem.main.temp} />
          </h2>
          <p>
            {elem.weather[0].main}
            <br />
            {elem.weather[0].description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayInCelsius;
