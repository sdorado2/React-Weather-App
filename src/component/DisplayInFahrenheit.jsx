import React from "react";
import Fahrenheit from "./Fahrenheit";

const DisplayInFahrenheit = ({ weather }) => {
  const MILLISECONDS = 1000;
  let dateObj;
  let dateTime;
  let date;
  let hrs;

  return (
    <div className="forecast">
      {weather.list.map((elem) => (
        // console.log(elem.dt)
        // dateObj = new Date(elem.dt);
        <div className="hrForecast">
          <h2>
            At : {new Date(elem.dt * 1000).toLocaleTimeString()}
            <hr />
            Date :{new Date(elem.dt * 1000).toDateString()}
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
