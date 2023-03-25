import React from "react";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        <div className="hrForecast">
          <h4>
            {new Date(elem.dt * 1000).toDateString()}
            <br />
            At :{" "}
            {new Date(elem.dt * 1000).toLocaleTimeString("en-US", {
              timeZone: "America/New_York",
              timeStyle: "short",
            })}
            <hr />
          </h4>
          <h2>
            <hr /> Temp : <Fahrenheit temp={elem.main.temp} />
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
