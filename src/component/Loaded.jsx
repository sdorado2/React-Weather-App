import React, { useState, useEffect } from "react";
import DisplayInCelsius from "./DisplayInCelsius";
import DisplayInFahrenheit from "./DisplayInFahrenheit";
import TemperatureNow from "./TemperatureNow";

// ? : Create A Kelvin Tab

const Loaded = ({ weather }) => {
  const [defaultDisp, setDefault] = useState();

  useEffect(() => {
    setDefault(<DisplayInFahrenheit weather={weather} />);
  }, []);

  return (
    <div>
      <TemperatureNow weather={weather} />
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
