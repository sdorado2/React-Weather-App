import React from "react";
import weatherIcons from "../model/Weathericons";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        <div key={elem.dt} className="hrForecast">
          <h4>
            {new Date(elem.dt * 1000).toDateString()}
            <br />
            At :{" "}
            {new Date(elem.dt * 1000).toLocaleTimeString("en-US", {
              timeZone: "America/New_York",
              timeStyle: "short",
            })}
            <hr />
            <img
              src={weatherIcons[elem.weather[0].main.toLowerCase()]}
              alt="weather_icon"
            />
          </h4>
          <h2>
            <hr /> Temp : <Fahrenheit temp={elem.main.temp} />
            <p className="minMax">
              &#128314;: <Fahrenheit temp={elem.main.temp_max} />
              &nbsp;|&nbsp;Min:
              <Fahrenheit temp={elem.main.temp_min} />
            </p>
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
