import React from "react";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
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

export default DisplayInFahrenheit;
