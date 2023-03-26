import React from "react";
import Fahrenheit from "./Fahrenheit";
import weatherIcons from "../model/Weathericons";

const TemperatureNow = ({ weather }) => {
  const MILLISECONDS = 1000;
  let dateObj = new Date(weather.list[0].dt * MILLISECONDS);
  let date = dateObj.toDateString();
  let hrs = dateObj.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    timeStyle: "short",
  });

  return (
    <div>
      <h1>
        {date}
        <br />
        {weather.city.name},{weather.city.country}
      </h1>
      <h2 className="tempNow">
        Temperature :&nbsp;
        <Fahrenheit temp={weather.list[0].main.temp} />
      </h2>
      <h2 className="feelNow">
        Feels like : &nbsp;
        <Fahrenheit temp={weather.list[0].main.feels_like} />
      </h2>
      <p>
        <img
          src={weatherIcons[weather.list[0].weather[0].main.toLowerCase()]}
          alt="weather_icon"
          className="weatherIcon"
        />
        <br />
        {weather.list[0].weather[0].main}
        <br />
        {weather.list[0].weather[0].description}
      </p>
      {/* <h2>At : {weather.list[0].dt_txt}</h2> */}
      <h2>At : {hrs}</h2>
    </div>
  );
};

export default TemperatureNow;
