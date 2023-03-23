import React from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

const Loaded = ({ weather }) => {
  console.log("It is loaded");
  return (
    <div>
      <h1>
        {weather.city.name},{weather.city.country}
      </h1>
      <h2>Temperature : {weather.list[0].main.temp}</h2>
      <h2>At : {weather.list[0].dt_txt}</h2>
      <h2>Forecast</h2>
      <div className="spanTest">
        {weather.list.map((elem) => (
          <div className="testing">
            <h2>
              At : {elem.dt_txt} <hr /> Temp :{" "}
              <Fahrenheit temp={elem.main.temp} />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loaded;
