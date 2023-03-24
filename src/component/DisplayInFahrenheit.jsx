import React from "react";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        <div className="hrForecast">
          <h2>
            At : {elem.dt_txt} <hr /> Temp :{" "}
            <Fahrenheit temp={elem.main.temp} />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DisplayInFahrenheit;
