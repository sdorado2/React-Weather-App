import React, { useEffect } from "react";
import Fahrenheit from "./Fahrenheit";
import { useState } from "react";
import DisplayInCelsius from "./DisplayInCelsius";
import DisplayInFahrenheit from "./DisplayInFahrenheit";

// ? Create A Kelvin Tab

const Loaded = ({ weather }) => {
  const [defaultDisp, setDefault] = useState();

  useEffect(() => {
    setDefault(<DisplayInFahrenheit weather={weather} />);
  }, []);

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

  return (
    <div>
      {temperatureNow()}
      <h2>Forecast</h2>
      <div className="convertTemp">
        <div
          onClick={() => setDefault(<DisplayInFahrenheit weather={weather} />)}
        >
          Fahrenheit
        </div>
        <div onClick={() => setDefault(<DisplayInCelsius weather={weather} />)}>
          Celsius
        </div>
      </div>
      {defaultDisp}
    </div>
  );
};

export default Loaded;
