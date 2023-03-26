import React from "react";
import Celsius from "./Celsius";
import weatherIcons from "../model/Weathericons";

const DisplayInCelsius = ({ weather }) => {
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
            })}{" "}
            <hr />
            <img
              src={weatherIcons[elem.weather[0].main.toLowerCase()]}
              alt="weather_icon"
            />
          </h4>
          <h2>
            Temp : <Celsius temp={elem.main.temp} />
            <span className="minMax">
              &#9650;: <Celsius temp={elem.main.temp_max} />
              &nbsp;|&nbsp;&#9661;:
              <Celsius temp={elem.main.temp_min} />
            </span>
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
