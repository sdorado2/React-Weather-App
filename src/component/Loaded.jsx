import React, { useEffect } from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";
import { useState } from "react";

const Loaded = ({ weather }) => {
  const [defaultDisp, setDefault] = useState();

  useEffect(() => {
    setDefault(displayInFahrenheit());
  }, []);

  const displayInFahrenheit = () => {
    return (
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
    );
  };

  const displayInCelsius = () => {
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

  const temperatureNow = () => {
    return (
      <div>
        <h1>
          {weather.city.name},{weather.city.country}
        </h1>
        <h2>
          Temperature : <Fahrenheit temp={weather.list[0].main.temp} />
          Feel like : <Fahrenheit temp={weather.list[0].main.feels_like} />
        </h2>
        <p>
          {weather.list[0].weather[0].main}
          <br />
          {weather.list[0].weather[0].description}
        </p>
        <h2>At : {weather.list[0].dt_txt}</h2>
      </div>
    );
  };

  console.log("It is loaded");

  return (
    <div>
      {temperatureNow()}
      <h2>Forecast</h2>
      <div className="convertTemp">
        <div onClick={() => setDefault(displayInFahrenheit())}>Fahrenheit</div>
        <div onClick={() => setDefault(displayInCelsius())}>Celsius</div>
      </div>
      {defaultDisp}
      {/* <div className="spanTest">
        {weather.list.map((elem) => (
          <div className="testing">
            <h2>
              At : {elem.dt_txt} <hr /> Temp :{" "}
              <Fahrenheit temp={elem.main.temp} />
            </h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Loaded;
