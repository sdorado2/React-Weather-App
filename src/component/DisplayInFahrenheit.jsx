import React from "react";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
  const MILLISECONDS = 1000;
  let dateObj;
  let date;
  let hrs;
  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        
        <div className="hrForecast">
          {
          dateObj = new Date(elem.dt * {MILLISECONDS});
          date = dateObj.toDateString();
          hrs = dateObj.toLocaleTimeString();
          }
          <h2>
            At : {elem.dt_txt} <hr /> Temp :{" "}
            {}
            <Fahrenheit temp={elem.main.temp} />
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

export default DisplayInFahrenheit;
